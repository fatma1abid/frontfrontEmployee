import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { UniversiteListComponent } from './universite/universite-list/universite-list.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  { path: 'afficher', component: UniversiteListComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
