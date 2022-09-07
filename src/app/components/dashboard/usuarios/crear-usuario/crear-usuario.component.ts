import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  generos:string[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
    }
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);

    this._snackBar.open('El usuario fue agregado con éxito', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
