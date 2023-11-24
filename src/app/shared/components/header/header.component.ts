import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private router:Router){
    
  }


  shouldApplyClass(): boolean {
    // Par exemple, basé sur la route
    return this.router.url.startsWith('/front/emprunterLivre') ;

  }


  shouldApplyClass1():boolean{
     return this.router.url.startsWith('/front/listLivres') ;
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  // Vérifie si la route actuelle appartient à la partie front-end
  isFrontRoute(): boolean {
    return this.router.url.startsWith('/front');
  }


}
