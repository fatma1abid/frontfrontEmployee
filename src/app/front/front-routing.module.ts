import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path:'Bib/:idFoyer' , component:BiblioComponent},
  {path: 'calendrier/:idBibliotheque', component: CalendrierComponent }, 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
