import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Login/register.component';
import { DecisionComponent } from './Login/decision.component';
import { GuardsGuard } from './services/service.index';
import { EntradaComponent } from './entrada/entrada.component';
import { DataclientComponent } from './registro/dataclient/dataclient.component';




const appRoutes: Routes = [
  { path: 'home', component: EntradaComponent},
  { path: 'regcliente/:user', component: DataclientComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register/:termino', component: RegisterComponent },
  { path: 'decision', component: DecisionComponent },
  //  {
  //      path: '',
  //      component: PageComponent,
  //      canActivate: [ GuardsGuard ],
  //  },
//  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
