import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LogoutGuard } from '../shared/guards/logout..guard';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
