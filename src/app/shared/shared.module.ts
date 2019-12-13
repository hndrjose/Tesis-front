import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatTreeModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';




import { HeaderComponent } from './header/header.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatTreeModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    PipesModule
  ],
  declarations: [
    HeaderComponent,
    BuscarComponent
  ],
  exports: [
    HeaderComponent,
    BuscarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }