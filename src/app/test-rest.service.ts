import {Injectable} from '@angular/core';
//importo paquetes http
import {HttpClient} from '@angular/common/http';

@Injectable()
// TestRestSErvice es el nombre de mi Servicio
export class TestRestService {
  //direccion del servidor
  miDireccion: string = 'https://reqres.in/api/users?page=2';

  //miHttp es el nombre de mi libreria httpclient (tipo de dato) que voy a usar en mi servicio TestRestService
  constructor(private miHttp: HttpClient) {
  }

  miMethodo() {
    return this.miHttp.get(this.miDireccion);
  }
}
