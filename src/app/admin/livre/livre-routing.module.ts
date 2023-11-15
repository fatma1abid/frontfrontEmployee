import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './components/add-livre/add-livre.component';

const routes: Routes = [
  {path:'add' , component:AddLivreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreRoutingModule { }
