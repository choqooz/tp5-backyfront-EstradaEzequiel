import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  tickets: Array<Ticket>;
  tipoEspectadorFiltro: string = 'Todos';
  ticketsFiltrados: Ticket[] = [];
  espectadoresFiltrados: any[] = [];
  constructor(private ticketService: TicketService, private router: Router) {
    this.tickets = new Array<Ticket>;
    this.cargarTickets();
  }

  cargarTickets() {
    this.ticketService.getTickets().subscribe(
      result => {
        let unTicket: Ticket = new Ticket();
        result.forEach((element: any) => {
          Object.assign(unTicket, element);
          this.tickets.push(unTicket);
          unTicket = new Ticket();
        });
        this.ticketsFiltrados = [...this.tickets]; // Copiar los tickets a la lista de tickets filtrados
      },
      error => {
        console.error('Error al cargar datos del servidor');
      }
    );
  }

  filtrarPorEspectador(categoria: string) {
    this.ticketService.getEspectadoresPorCategoria(categoria).subscribe(
      result => {
        this.espectadoresFiltrados = result;
      },
      error => {
        console.error('Error al filtrar por espectador');
      }
    );
  }
  agregarTicket() {
    this.router.navigate(['ticket', 0])
  }
  modificarTicket(ticket: Ticket) {
    this.router.navigate(['ticket', ticket._id])
  }
  eliminarTicket(ticket: Ticket) {
    if (confirm('¿Estás seguro de que quieres eliminar este ticket?')) {
      this.ticketService.deleteTicket(ticket._id).subscribe(
        result => {
          if (result.status == '1') {
            alert('Ticket eliminado correctamente');
            location.reload();
          }
        },
        error => {
          console.error('Error al eliminar el ticket');
        }
      );
    }
  }
  /* // Método para calcular el total general
calcularTotalGeneral(): number {
  return this.tickets.reduce((total, t) => total + t.precioCobrado, 0);
} */
  /*  agregarTicket() {
     this.router.navigate(['ticket', 0])
   }
   modificarTicket(ticket: Ticket) {
     this.router.navigate(['ticket', ticket.id])
   }
   eliminarTicket(ticket: Ticket) {
     const index = this.tickets.indexOf(ticket);
     if (index !== -1) {
       this.tickets.splice(index, 1);
       this.ticketService.eliminarTicket(ticket.id);
     }
   } */
}