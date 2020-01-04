import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';

import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Login/register.component';
import { DecisionComponent } from './Login/decision.component';

// Ruteador
import { APP_ROUTES } from './app.routes';


// Libreria de materiales
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTreeModule, MatFormFieldModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

// Servicios
import { ServiceModule } from './services/service.module';
import { MainListaComponent } from './pages/main-lista/main-lista.component';
import { EntradaComponent } from './entrada/entrada.component';
import { PageComponent } from './pages/page.component';
import { SharedModule } from './shared/shared.module';

import { PageModule } from './pages/page.module';
import { DataproveeComponent } from './registro/dataprovee/dataprovee.component';
import { DataclientComponent } from './registro/dataclient/dataclient.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DecisionComponent,
    EntradaComponent,
    DataproveeComponent,
    DataclientComponent
  //  PageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SharedModule,
    PageModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LoginComponent, RegisterComponent, MatFormFieldModule, DecisionComponent]
})
export class AppModule { }
