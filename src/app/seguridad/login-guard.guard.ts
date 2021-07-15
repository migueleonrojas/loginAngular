import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { OperacionBbddService } from '../servicios/servicios-bbdd/operacion-bbdd.service';
import { ComunicacionService } from '../servicios/servicios-componentes/comunicacion-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  usuarioExistente: any;

  constructor(
    private comunicacionService:ComunicacionService,
    private operacionBbddService: OperacionBbddService,
    private router: Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
    if(localStorage.getItem("usuario") === null){
    
      this.router.navigate(['/acceso']);

    }
  
    
    return true;
  }
  
}
