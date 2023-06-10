import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagebComponent } from './components/pageb/pageb.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';

const routes: Routes = [
  { path: 'productos-lista', component: ProductoListaComponent },
  { path: 'productos-form', component: ProductoFormComponent },
  { path: 'pageb', component: PagebComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
