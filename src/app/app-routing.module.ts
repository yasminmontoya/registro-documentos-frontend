import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';

const routes: Routes = [
    {path: 'documentos', component:ListaDocumentosComponent},
    {path: '', redirectTo: 'documentos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
