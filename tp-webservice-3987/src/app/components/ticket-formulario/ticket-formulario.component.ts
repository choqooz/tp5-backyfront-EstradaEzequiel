import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-formulario',
  templateUrl: './ticket-formulario.component.html',
  styleUrls: ['./ticket-formulario.component.css']
})
export class FormularioComponent implements OnInit {
  accion: string = "new";
  ticket: Ticket = new Ticket();
  espectadores!: Array<Espectador>;

  constructor(
    private ticketService: TicketService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private espectadorService: EspectadorService) {
    this.ticket = new Ticket();
    this.espectadores = new Array<Espectador>();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == '0') {
        this.accion = 'new';
        this.cargarEspectadores();
      } else {
        this.accion = 'update';
        this.cargarEspectadores();
        this.cargarTicket(params['id']);

      }
    });
  }
  cargarTicket(id: string) {
    this.ticketService.getTicket(id).subscribe(
      result => {
        console.log(result);
        Object.assign(this.ticket, result)
        this.ticket.espectador = this.espectadores.find(item => (item._id == this.ticket.espectador._id))!
      }
    );
  }
  cargarEspectadores() {
    this.espectadorService.getEspectadores().subscribe(
      result => {
        let unEspectador = new Espectador();
        result.forEach((element: any) => {
          Object.assign(unEspectador, element);
          this.espectadores.push(unEspectador);
          unEspectador = new Espectador();
        });
      },
      error => {
        console.error("Error al obtener los datos del equipo")
      }
    );
  }
  guardarTicket() {
    this.ticketService.createTicket(this.ticket).subscribe(
      result => {
        if (result.status == 1) {
          alert('Se ha registrado correctamente el nuevo ticket');
        }
      },
      error => {
        alert(error.msg)
      }
    )
  }
  actualizarTicket() {
    this.ticketService.updateTicket(this.ticket).subscribe(
      result => {
        if (result.status == '1') {
          alert('Ticket actualizado correctamente');
        }
      },
      error => {
        alert(error.msg);
      }
    );
  }

  /*  public guardarTicket() {
     this.ticket.fechaCobro = new Date();
     this.ticketService.addTicket(this.ticket)
     this.ticket = new Ticket();
     this.router.navigate(['ticket']);
   }
 
   public calcularDescuento() {
     this.ticket.precioCobrado = this.ticket.precioReal;
     if (this.ticket.tipoEspectador === 'Local') {
       this.ticket.precioCobrado -= this.ticket.precioReal * 0.20;
     }
   }
 
 
   public listarTickets() {
     return this.ticketService.getTickets();
   }
  
   actualizarTicket() {
     this.ticketService.actualizarTicket(this.ticket);
     this.router.navigate(['ticket']);
   } */
}