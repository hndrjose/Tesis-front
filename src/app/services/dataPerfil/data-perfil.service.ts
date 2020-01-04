import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIO } from '../../config/config';

import { DataPerfil } from 'src/app/models/dataperfil.models';
import { Usuario } from 'src/app/models/usuarios.models';


import swal from 'sweetalert';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SubirarchivoService } from '../subirarchivo/subirarchivo.service';


@Injectable({
  providedIn: 'root'
})
export class DataPerfilService {

  dataperfil: DataPerfil;
  verificar: string;

  constructor(public http: HttpClient, public router: Router) { }

  creardataPerfil( dataperfil: DataPerfil) {
    const url = URL_SERVICIO + '/dataperfil/addDataPerfil';

    return this.http.post( url, dataperfil)
    .map( (resp: any) => {
        swal('Perfil Acualizado', 'success');
        return resp;
       })
       .catch( err => {
        console.log( err.error.mensaje );
     //   swal(err.error.mensaje, err.error.errors.message, 'error');
        return Observable.throw( err );
       });
  }


  actualizardataPerfil(dataperfil: DataPerfil,  usuario: Usuario) {

    let url = URL_SERVICIO + '/dataperfil/editarDataPerfil/' + usuario[0].Iduser;
    let verifica = Boolean;
    console.log('Del service ');
    console.log(dataperfil[0]);
    return this.http.put( url, dataperfil[0] )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
                 swal('Registro actualizado', 'success' );
              });
  }

  cargarDataPerfil(termino: string, page: number) {  // termino: string, page: number, limit: number
    let url = URL_SERVICIO + '/dataperfil/SelecDataLike/' + termino +  '?page=' + page + '&limit=2';
    return this.http.get(url)
    .map( (resp: any) => resp.perfiles );

  }
 // URL_SERVICIO + `/dataperfil/SelecDataLike/${termino}?page=${page}&limit=${limit}`;
}
