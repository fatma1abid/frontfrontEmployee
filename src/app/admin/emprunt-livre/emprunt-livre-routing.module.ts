import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpruntLivreComponent } from './add-emprunt-livre/add-emprunt-livre.component';

const routes: Routes = [
  {path: 'list' , component:AddEmpruntLivreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpruntLivreRoutingModule { }
