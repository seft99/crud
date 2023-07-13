import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  ingresar() {
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'seft99' && password == '1234') {
      //REDIRECCIONAMOS AL DASHBOARD
      this.fakeloading();
    } else {
      //MENSAJE ERROR
      this.error();
    }
  }
  error() {
    this._snackBar.open('Usuario o contraseña incorrecto', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  fakeloading() {
    this.loading = true;
    setTimeout(() => {
      //Redireccionamos al Dashboard
     this.router.navigate(['dashboard']);
    }, 1500);
  }
}
