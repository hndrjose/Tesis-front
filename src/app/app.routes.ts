import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Login/register.component';
import { DecisionComponent } from './login/decision.component';




const appRoutes: Routes = [
  //  { path: 'home', component: PageComponent}
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'decision', component: DecisionComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
