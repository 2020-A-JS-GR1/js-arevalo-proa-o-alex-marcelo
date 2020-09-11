import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";

@Injectable()
// @ts-ignore
export class UsuarioServices {
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  traerTodos() {
    return this._httpClient.get(this.url + '/Usuario')
  }

  crear(usuario) {
    return this._httpClient.post(this.url + '/Usuario', usuario)
  }

  obtenerUnoPorId(idUsuario: number) {
    return this._httpClient.get(this.url + '/Usuario/' + idUsuario)
  }

  eliminar(idUsuario: number){
    return this._httpClient.delete(this.url + '/Usuario/' + idUsuario)
  }
}
