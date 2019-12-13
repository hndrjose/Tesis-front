import { Component, OnInit } from '@angular/core';
import { DataPerfilService } from '../../services/service.index';
import { DataUser } from '../../models/data-user.models';
import { UserService } from '../../services/usuario/user.service';
import { Usuario } from '../../models/usuarios.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css']
})
export class PreviousComponent implements OnInit {
  usuario: Usuario; // = new Usuario('', '', '', '', '', '', '', '', '', );
  imagenSubir: File;
  imagenTemp: any;
  verifica: any;
  data: any[] = [];

  constructor(public usuarioService: UserService, public activatedRoute: ActivatedRoute) {
  //  this.usuario = this.usuarioService.usuario;
  activatedRoute.params.subscribe(
    params => {
         let termino = params['termino'];
         console.log(termino);
        //  this.usuarioService.cargarUsuarioId( termino ).subscribe( (resp: any) => { this.usuario = resp; });
        //  console.log(this.usuario);
         this.cargarusuarios(termino);
     });
  }

  ngOnInit() {
  }


  cargarusuarios( termino: number ) {
    this.usuarioService.cargarUsuarioId( termino ).subscribe( (resp: any) => { this.usuario = resp; });
    console.log(this.usuario[0].Iduser);
  }
}
