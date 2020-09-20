import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
// @ts-ignore
export class AuthService {
  url = 'http://localhost:1337'
  estaAutenticado = false;
  roles = [
    'Administrador',
    'Supervisor'
  ]

  constructor(private readonly _httpClient: HttpClient) {
  }

  logIn(correo: string, cedula: string) {
    return this._httpClient.get(
      this.url + '/Usuario?correo=' + correo + '&cedula=' + cedula
    )
  }
}
