import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { RegistrarDocumentoComponent } from './registrar-documento/registrar-documento.component';

const routes: Routes = [
    {path: 'documentos', component:ListaDocumentosComponent},
    {path: '', redirectTo: 'documentos', pathMatch: 'full'},
    {path: 'registrar-documento', component:RegistrarDocumentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
