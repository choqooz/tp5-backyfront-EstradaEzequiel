import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Array<Ticket>;
  //El service se encarga de el CRUD de los tickets.
  constructor(private _http: HttpClient) {
    this.tickets = new Array<Ticket>();
  }

  getTickets(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/", httpOption)
  }
  getTicket(id: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/" + id, httpOption)
  }
  createTicket(ticket: Ticket): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket)
    return this._http.post("http://localhost:3000/api/ticket/", body, httpOption)
  }

  updateTicket(ticket: Ticket): Observable<any> {
    return this._http.put("http://localhost:3000/api/ticket/" + ticket._id, ticket);
  }
  deleteTicket(id: string): Observable<any> {
    return this._http.delete("http://localhost:3000/api/ticket/" + id);
  }
  getEspectadoresPorCategoria(categoriaEspectador: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams().set('categoria', categoriaEspectador)
    };

    return this._http.get("http://localhost:3000/api/ticket/espectador/tipoEspectador", httpOptions);
  }


  /* getTicket(id: string): Ticket {
    let ticket: Ticket = new Ticket();
    let indexTicket: number = this.tickets.findIndex((t) => t.id == id);
    ticket = this.tickets[indexTicket];
    return ticket;
  } */

  /* getIdDisponible() {
    var maxid: number;
    maxid = 0;
    for (var i = 0; i < this.tickets.length; i++) {
      if (maxid < Number(this.tickets[i].id)) {
        maxid = Number(this.tickets[i].id);
      }
    }
    return String(maxid + 1);
  } */

  /* eliminarTicket(id: string) {
    const index = this.tickets.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tickets.splice(index, 1);
    }
  }

  actualizarTicket(ticket: Ticket) {
    const index = this.tickets.findIndex((t) => t.id === ticket.id);
    if (index !== -1) {
      this.tickets[index] = ticket;
    }
  } */

}
