import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { ListEtudiantsComponent } from './components/user/list-etudiants/list-etudiants.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  {path:'etudiants' , component:ListEtudiantsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}
