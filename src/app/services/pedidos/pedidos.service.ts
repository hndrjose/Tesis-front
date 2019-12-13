import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIO } from '../../config/config';

import { Usuario } from '../../models/usuarios.models';
import { Pedido } from '../../models/pedido.models';

// ERROR in node_modules/sweetalert/typings/sweetalert.d.ts(4,9):
//  error TS2403: Subsequent variable declarations must have the same type.  Variable 'swal' cambiar a  _swal
import swal from 'sweetalert';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SubirarchivoService } from '../subirarchivo/subirarchivo.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  verificar: string;
  pedido: Pedido;
  constructor( public http: HttpClient, public router: Router) { }


  crearpedido( pedido: Pedido ) {
    const url = URL_SERVICIO + '/pedido/adpedido' ;

    return this.http.post( url, pedido )
    .map( (resp: any) => {
        swal({title: 'Se Registro el Pedido', text: 'Gracias por Utilizar ServiTodo', timer: 2000 }); // , showConfirmButton: false
        return resp.usuario;
       })
       .catch( err => {
        console.log( err.error.mensaje );
     //   swal(err.error.mensaje, err.error.errors.message, 'error');
        return Observable.throw( err );
       });
  }

  cargarPedidoPerfil(termino: string) {  // termino: string, page: number, limit: number
    let url = URL_SERVICIO + '/pedido/Selecpedidos/' + termino ;
    console.log(url);
    return this.http.get(url)
    .map( (resp: any) => resp.usuarios );
  }
  cargarPedidoPerfilProv(termino: string) {  // termino: string, page: number, limit: number
    let url = URL_SERVICIO + '/pedido/Selecpedidospro/' + termino ;
    console.log(url);
    return this.http.get(url)
    .map( (resp: any) => resp.usuarios );
  }

}
