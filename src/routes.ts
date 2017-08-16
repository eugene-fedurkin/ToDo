import { RouterModule, Routes } from '@angular/router';
import { SignUp, Register } from './components';

const routes: Routes = [
  { path: 'signUp', component: SignUp },
  
];

export const routingConfig = RouterModule.forRoot(routes);