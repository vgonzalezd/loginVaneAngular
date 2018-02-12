import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
// importo etiquetas de estilos
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {OtraPaginaComponent} from './otra-pagina/otra-pagina.component';

// redireccionamiento
import {MiModuloDeRuteo} from './app-routing.module';

// mi modulo debe conocer mi componente servicio
import {TestRestService} from './test-rest.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    // OtraPaginaComponent
  ],
  imports: [
    BrowserModule,
    // No olvidar que Dios debe conocer el modulo con la libreria de donde mi servicio va a usar.
    HttpClientModule,
    // MiModuloDeRuteo
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    // Aqui van los servicios
    TestRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
