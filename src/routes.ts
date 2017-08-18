import { RouterModule, Routes } from '@angular/router';
import { SignUp, SignIn, Lists, List, Item } from './components';

const routes: Routes = [
  { path: 'signUp', component: SignUp },
  { path: 'signIn', component: SignIn },
  { path: 'lists', component: Lists, children: [
    { path: 'list/:listId', component: List, children: [
      { path: 'items/:itemId', component: Item }
    ]},
    
  ]},
];

export const routingConfig = RouterModule.forRoot(routes);