import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIO } from '../../config/config';


import { Usuario } from '../../models/usuarios.models';

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
export class UserService {

usuario: Usuario;
verificar: string;

  constructor( public http: HttpClient, public router: Router, public subirArchivo: SubirarchivoService ) {
    this.cargarStorage();
  }

  crearUsuario( usuario: Usuario ) {
    const url = URL_SERVICIO + '/usuario/crearUsuario' ;

    return this.http.post( url, usuario )
    .map( (resp: any) => {
        swal('Usuario Creado', usuario.email, 'success');
        return resp.usuario;
       })
       .catch( err => {
        console.log( err.error.mensaje );
     //   swal(err.error.mensaje, err.error.errors.message, 'error');
        return Observable.throw( err );
       });
  }

  cargarUsuarios( ) {
    let url = URL_SERVICIO + '/usuario/users';
    return this.http.get( url )
              .map( (resp: any ) => {
                return resp.usuarios;
              });
  }

  VerificarUsuario( termino: number, usuario: Usuario ) {
    let verificar: string;
    let url = URL_SERVICIO + '/usuario/SelecionUsuario/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
           if (verificar) {
             console.log('Existe el Registro');
           //  this.actualizarUsuario(usuario) .subscribe();
             return false;
           } else {
             console.log('No existe');
             this.crearUsuario(usuario).subscribe();
           }
     });
  }

  cargarUsuarioId( id: number ) {
    let url = URL_SERVICIO + '/usuario/SelecionUsuario/' + id;
    return this.http.get(url)
      .map( (resp: any) => {
       return resp.usuarios;
      });
    // this.guardarStorage(resp.ok, resp.usuarios);
  }


  actualizarUsuario(usuario: Usuario ) {

    let url = URL_SERVICIO + '/usuario/editarUsuario/' + usuario[0].Iduser;
    let verifica = Boolean;
    console.log('Del service ');
    console.log(usuario[0]);
    return this.http.put( url, usuario[0] )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
                 swal('Registro actualizado', 'success' );
              });
  }


  guardarStorage(ok: string, usuario: Usuario) {
    localStorage.setItem('ok', ok);
    localStorage.setItem('user', usuario[0].user);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    // this.usuario = usuario;
    // this.token = token;
   }

   cargarStorage() {
    if ( localStorage.getItem('ok')) {
     // this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    //  this.menu = JSON.parse( localStorage.getItem('menu') );
    } else {
    //  this.token = '';
      this.usuario = null;
    //  this.menu = [];
    }
  }


  logout() {
    // this.usuario = null;
    this.verificar = '';
    localStorage.removeItem('ok');
    localStorage.removeItem('usuario');
    this.router.navigate(['/dasboard']);
  }

  limpiarStorage() {
    localStorage.removeItem('ok');
    localStorage.removeItem('usuario');
  }
  LogearUsuario( usuario: Usuario ) {
    let url = URL_SERVICIO + '/login/logUser';
    return this.http.post( url, usuario)
         .map( (resp: any ) =>  {
           this.verificar = resp.ok;
           console.log(this.verificar);
           if (this.verificar) {
               console.log('Existe el Registro');
               this.guardarStorage( resp.ok, resp.usuarios);
               return true;
            } else {
               console.log('No existe');
               return false;
           }
     });
  }

  cambiarImagen( archivo: File, id: string ) {
 // console.log( archivo + '  ' + id );
    this.subirArchivo.subirArchivo( archivo, 'usuario', id )
          .then( (resp: any) => {
            this.usuario[0].img = resp.usuarios;
            console.log('imgane:  ' + this.usuario[0].img);
           // swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarStorage( resp.ok,  this.usuario );
          })
          .catch( resp => {
            console.log( resp );
          }) ;
  }

}
