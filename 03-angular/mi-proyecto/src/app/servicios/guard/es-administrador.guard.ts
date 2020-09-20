import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {AuthService} from '../auth/auth.service';

@Injectable()
// @ts-ignore
export class EsAdministradorGuard implements CanActivate {
  constructor(private readonly _authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const esAdministrador = this._authService
      .roles.some(
        (rol: string) => {
          return rol === 'Administrador'
        }
      );
    return esAdministrador;
  }

}
