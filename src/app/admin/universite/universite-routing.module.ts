import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { UniversiteAddComponent } from './universite-add/universite-add.component';

const routes: Routes = [
  { path: '', component: UniversiteListComponent },
  { path: 'detail/:id', component: UniversiteUpdateComponent },
  { path: 'add', component: UniversiteAddComponent },
  // Ajoutez d'autres routes si nécessaire
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
