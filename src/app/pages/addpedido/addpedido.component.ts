import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Pedido } from '../../models/pedido.models';
import { Usuario } from '../../models/usuarios.models';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { UserService } from '../../services/usuario/user.service';



@Component({
  selector: 'app-addpedido',
  templateUrl: './addpedido.component.html',
  styleUrls: ['./addpedido.component.css']
})
export class AddpedidoComponent implements OnInit {
 // dateDay = new Date().getDay();

  fecha = new Date();
  fecha2 = this.fecha.getFullYear() + '-' + this.fecha.getMonth() + '-' +  this.fecha.getDate();
  usuario: Usuario;
  pedido: Pedido;
  termino: number;

  forma: FormGroup;

  constructor(public ruter: Router, public pedidoService: PedidosService,
    public usuarioService: UserService, public activatedRoute: ActivatedRoute ) {
    this.usuario = this.usuarioService.usuario;

    activatedRoute.params.subscribe(
      params => {
           this.termino = params['termino'];
       });
  }

  ngOnInit() {
  }

  guardarDatos( forma: NgForm ) {
    let status = 'pendiente';
    const pedido = new Pedido(this.usuario[0].user, this.fecha2 , forma.value.valor, status, this.termino);
   // this.pedido.fecha = this.dateDay;
    console.log(pedido);
    this.pedidoService.crearpedido(pedido).subscribe();
  //  console.log( this.usuario );
  }


}
