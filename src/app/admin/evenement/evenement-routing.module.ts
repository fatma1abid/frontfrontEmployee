import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddevenementComponent} from './components/addevenement/addevenement.component';
import {UpdateevenementComponent} from './components/updateevenement/updateevenement.component';
import {ListevenementComponent} from './components/listevenement/listevenement.component';
const routes: Routes = [
  { path: 'addevent', component: AddevenementComponent },
  { path: 'listevent', component: ListevenementComponent },
 { path: 'updateevent/:id', component: UpdateevenementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
