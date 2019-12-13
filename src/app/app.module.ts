import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Componentes
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Login/register.component';

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
import { DecisionComponent } from './login/decision.component';








@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DecisionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
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
  providers: [MainListaComponent],
  bootstrap: [AppComponent],
  exports: [LoginComponent, RegisterComponent, MatFormFieldModule]
})
export class AppModule { }
