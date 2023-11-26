import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { DepartementListComponent } from './departement/departement-list/departement-list.component';
import { UniversiteListComponent } from './universite/universite-list/universite-list.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path:'afficher' , component:UniversiteListComponent},
  { path: 'departement/:nomUniversite', component: DepartementListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
