import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as jwt from 'jwt-decode';


@Injectable({
    providedIn: 'root'
})

export class LogoutGuard {
    
    constructor( private router:Router,private jwtHelper:JwtHelperService) {}  
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = localStorage.getItem('Token');
        if(this.jwtHelper.isTokenExpired(token) || !token){
            localStorage.removeItem('Token');

            return true;
        }else{
            this.router.navigateByUrl('/front/accueil');
            return false;
        }
    }
}