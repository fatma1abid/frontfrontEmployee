import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpruntLivresComponent } from './components/list-emprunt-livres/list-emprunt-livres.component';

const routes: Routes = [
  {path: 'list' , component:ListEmpruntLivresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpruntLivreRoutingModule { }
