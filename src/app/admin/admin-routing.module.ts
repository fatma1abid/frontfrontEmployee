import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { ListEtudiantsComponent } from './user/list-etudiants/list-etudiants.component';
import { RoleGuard } from '../shared/guards/role.guard';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UniversiteListComponent } from './universite/universite-list/universite-list.component';

const routes: Routes = [
  {path: 'etudiants', loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },
  {path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },

  {path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },
  {path: 'livre', loadChildren: () => import('./livre/livre.module').then(m => m.LivreModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },
  {path: 'empruntLivre', loadChildren: () => import('./emprunt-livre/emprunt-livre.module').then(m => m.EmpruntLivreModule),canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ADMIN' } },
  {path:'accueil' , component:PageAccueilComponent},
  { path: 'afficher', component: UniversiteListComponent },
  { path: 'foyer', loadChildren: () => import('./foyer/foyer.module').then(m => m.FoyerModule) },
  { path: 'bloc', loadChildren: () => import('./bloc/bloc.module').then(m => m.BlocModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}
