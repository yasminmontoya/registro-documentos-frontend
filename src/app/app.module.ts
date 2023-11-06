import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarDocumentoComponent } from './registrar-documento/registrar-documento.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDocumentosComponent,
    RegistrarDocumentoComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
