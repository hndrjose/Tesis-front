import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService, DataPerfilService, PedidosService, GuardsGuard, ValidarService } from './service.index';


import { CommonModule } from '@angular/common';




@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [
          UserService,
          DataPerfilService,
          PedidosService,
          GuardsGuard,
          ValidarService
      ],
      declarations: [
      ]
})

export class ServiceModule { }