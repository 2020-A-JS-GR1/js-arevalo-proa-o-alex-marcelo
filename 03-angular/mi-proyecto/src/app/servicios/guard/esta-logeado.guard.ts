import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {AuthService} from '../auth/auth.service';

@Injectable()
// @ts-ignore
export class EstaLogeadoGuard implements CanActivate {
  constructor(private readonly _authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.estaAutenticado) {
      return true;
    }
    return false;
  }

}
