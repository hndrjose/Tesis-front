import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.models';
import { UserService } from '../../services/service.index';



@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

usuario: Usuario;
user: any;

  constructor( public usuarioService: UserService ) {
    if (localStorage.getItem.length > 0) {
    //  this.user = this.usuarioService.usuario;
    console.log( 'Hay datos' );
    } else {
      console.log('No hay datos disponibles');
    }
  }

  ngOnInit() {

  }


}
