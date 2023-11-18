import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { ListLivreComponent } from '../admin/livre/components/list-livre/list-livre.component';
import { ListLivresComponent } from './components/list-livres/list-livres.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path:'listCategory' , component:ListCategorieComponent},
  {path:'listLivres/:idCategory' , component:ListLivresComponent},
  {path:'livreDetails/:idLivre' , component:ListLivresComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
