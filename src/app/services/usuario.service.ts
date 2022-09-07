import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', genero: 'Masculino'},
    {usuario: 'mgomez', nombre: 'María', apellido: 'Gómez', genero: 'Femenino'},
    {usuario: 'ngarcia', nombre: 'Nelson', apellido: 'García', genero: 'Masculino'},
    {usuario: 'ofarfan', nombre: 'Óscar', apellido: 'Farfán', genero: 'Masculino'},
    {usuario: 'jsulvara', nombre: 'Julieth', apellido: 'Sulvará', genero: 'Femenino'},
    {usuario: 'pvelasquez', nombre: 'Paola', apellido: 'Velásquez', genero: 'Femenino'}
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
