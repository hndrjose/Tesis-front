import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/usuario/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuarios.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;
  usuario: Usuario[] = [];
  // forma = new  FormGroup({
  //   user : new FormControl(''),
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   password2 : new FormControl('')
  // });

  constructor( public usuarioService: UserService, public router: Router ) { }

  ngOnInit() {
    this.forma = new FormGroup({
      user: new FormControl( null, Validators.required ),
      email: new FormControl( null, Validators.required ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
    });
  }


  GuargarUser(  ) {

    let usuario = new Usuario(
      this.forma.value.user,
      this.forma.value.password,
      this.forma.value.email
    );

    if( this.forma.value.password === this.forma.value.password2 ) {
      console.log(usuario);
      this.usuarioService.crearUsuario( usuario ).subscribe( resp => this.router.navigate(['/login']));
    } else {
      console.log('password incorreto');
    }
  }

}
