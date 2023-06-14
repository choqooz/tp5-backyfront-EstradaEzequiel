import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagebComponent } from './components/pageb/pageb.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { PagebListaComponent } from './components/pageb-lista/pageb-lista.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { FormularioComponent } from './components/ticket-formulario/ticket-formulario.component';

const routes: Routes = [
  { path: 'productos-lista', component: ProductoListaComponent },
  { path: 'productos-form', component: ProductoFormComponent },
  { path: 'pageb', component: PagebComponent },
  { path: 'pageb-lista', component: PagebListaComponent },
  { path: 'ticket-formulario', component: TicketComponent },
  { path: 'ticket/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
