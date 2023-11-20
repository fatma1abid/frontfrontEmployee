import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './components/add-livre/add-livre.component';
import { ListEmpruntLivresComponent } from './components/list-emprunt-livres/list-emprunt-livres.component';

const routes: Routes = [
  {path:'add' , component:AddLivreComponent},
  {path:'listEmprunts' , component:ListEmpruntLivresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreRoutingModule { }
