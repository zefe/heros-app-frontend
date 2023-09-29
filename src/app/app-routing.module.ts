import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth', //Lazyload
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'heroes', // Lazyload
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full', //indica que tiene que ser '' para postrar el path heroes, porque hay un espacion encada caracter del resto de paths, auth y heroes
  },
  {
    path: '**', // cualquier otro path -productos- que no este declarado aqui, sera redireccionado aqui 404
    redirectTo: '404', 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
