import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LogoutGuard } from '../shared/guards/logout..guard';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { ListLivresComponent } from './components/list-livres/list-livres.component';
import { DemandeEmpruntComponent } from './components/demande-emprunt/demande-emprunt.component';
import { RoleGuard } from '../shared/guards/role.guard';
import { DepartementListComponent } from './departement/departement-list/departement-list.component';
import { UniversiteListComponent } from './universite/universite-list/universite-list.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule) },
  {path:'accueil' , component:AccueilFrontComponent,canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ETUDIANT' } },
  {path:'listCategory' , component:ListCategorieComponent,canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ETUDIANT' } },
  {path:'listLivres/:idCategory' , component:ListLivresComponent,canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ETUDIANT' }},
  {path:'livreDetails/:idLivre' , component:ListLivresComponent,canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ETUDIANT' }},
  {path:'emprunterLivre/:idLivre' , component:DemandeEmpruntComponent,canActivate: [AuthGuard,RoleGuard], 
  data: { 
  expectedRole: 'ETUDIANT' }},

  {path:'accueil' , component:AccueilFrontComponent},
  {path:'afficher' , component:UniversiteListComponent},
  { path: 'departement/:nomUniversite', component: DepartementListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
