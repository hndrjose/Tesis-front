import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
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
imagenTemp: any;
valor: number;

  constructor( public usuarioService: UserService ) {
      this.usuario = this.usuarioService.usuario;
      this.valor = 50;
  }


  forma: FormGroup;
  verifica: any;

  ngOnInit() {

  }


}
