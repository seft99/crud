import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios:Usuario[] = [
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'},
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'},
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'},
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'},
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'},
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'},
    {usuario: "sfuentes", nombre: 'Sebastian', apellido:'Fuentes', sexo:'M'},
    {usuario: "kpeña", nombre: 'Keyner', apellido:'Peña', sexo:'M'},
    {usuario: "dandrade", nombre: 'Daniel', apellido:'Andrare', sexo:'M'},
    {usuario: "jribon", nombre: 'Jesus', apellido:'Ribon', sexo:'M'},
    {usuario: "djaimes", nombre: 'Duvan', apellido:'Jaimes', sexo:'M'}
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
}


