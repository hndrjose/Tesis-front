import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService, DataPerfilService, PedidosService } from './service.index';






@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [
          UserService,
          DataPerfilService,
          PedidosService
      ],
      declarations: [
      ]
})

export class ServiceModule { }