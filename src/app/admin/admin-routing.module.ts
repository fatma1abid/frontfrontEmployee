import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { UniversiteListComponent } from './universite/universite-list/universite-list.component';
import { UniversiteUpdateComponent } from './universite/universite-update/universite-update.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  { path: 'liste-universites', component: UniversiteListComponent },
  { path: 'update/:idUniversite', component: UniversiteUpdateComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
