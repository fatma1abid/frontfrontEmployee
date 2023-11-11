import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  {path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
  {path: 'livre', loadChildren: () => import('./livre/livre.module').then(m => m.LivreModule) },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
