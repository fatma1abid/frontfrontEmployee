import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path:'listCategory' , component:ListCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
