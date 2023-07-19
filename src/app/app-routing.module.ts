import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';

const routes: Routes = [
  {
    path: 'clientes', component: ListarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
