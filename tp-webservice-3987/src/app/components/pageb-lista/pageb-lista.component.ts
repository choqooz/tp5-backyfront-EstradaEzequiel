import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-pageb-lista',
  templateUrl: './pageb-lista.component.html',
  styleUrls: ['./pageb-lista.component.css']
})
export class PagebListaComponent implements OnInit {
  transacciones: any[] = [];
  transaccionesFiltradas: any[] = [];
  monedaOrigenFiltro: string = '';
  monedaDestinoFiltro: string = '';

  constructor(private divisasService: DivisasService) { }

  ngOnInit(): void {
    this.divisasService.getTransacciones().subscribe(
      (transacciones) => {
        this.transacciones = transacciones;
        this.transaccionesFiltradas = transacciones;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filtrarTransacciones(): void {
    this.transaccionesFiltradas = this.transacciones.filter((transaccion) => {
      if (
        (!this.monedaOrigenFiltro || transaccion.monedaOrigen === this.monedaOrigenFiltro) &&
        (!this.monedaDestinoFiltro || transaccion.monedaDestino === this.monedaDestinoFiltro)
      ) {
        return true;
      }
      return false;
    });
  }

  limpiarFiltros(): void {
    this.monedaOrigenFiltro = '';
    this.monedaDestinoFiltro = '';
    this.transaccionesFiltradas = [];
  }
}
