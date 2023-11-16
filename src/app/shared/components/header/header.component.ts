import { Component } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private router:Router,private route : ActivatedRoute){
    
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  // Vérifie si la route actuelle appartient à la partie front-end
  isFrontRoute(): boolean {
    return this.router.url.startsWith('/front');
  }

  isSpecificRoute(): boolean {
    return this.router.url !== "/front/register" && this.router.url !== "/front/login" && this.router.url !== "/front/updateProfile";
  }
}
