import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { PagebListaComponent } from './components/pageb-lista/pageb-lista.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { FormularioComponent } from './components/ticket-formulario/ticket-formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    PagebComponent,
    HeaderComponent,
    FooterComponent,
    ProductoListaComponent,
    ProductoFormComponent,
    PagebListaComponent,
    TicketComponent,
    FormularioComponent,
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
