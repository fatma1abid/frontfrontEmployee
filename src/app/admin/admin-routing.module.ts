import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { ListEtudiantsComponent } from './user/list-etudiants/list-etudiants.component';
import { RoleGuard } from '../shared/guards/role.guard';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  {path: 'etudiants', loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },
  {path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}
