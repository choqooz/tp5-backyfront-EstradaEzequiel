import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent {
  constructor(private divisasService: DivisasService) {

  }
  mostrarBoton: boolean = false;
  currjson: any = [];
  quiero = '';
  tengo = '';
  cantidad: number = 1;
  resultado: number = 1;

  convertirMoneda() {
    this.divisasService.getCurrency(this.tengo, this.quiero, this.cantidad)
      .subscribe(
        response => {
          console.log(response)
          this.resultado = response.new_amount;
          this.mostrarBoton = true;
        },
        error => {
          console.error(error);
        }
      );
  }
  guardarTransaccion() {
    const transaccion = {
      monedaOrigen: this.tengo,
      cantidadOrigen: this.cantidad,
      monedaDestino: this.quiero,
      cantidadDestino: this.resultado,
      emailCliente: 'correo@correo.com',
      tasaConversion: 0
    };

    this.divisasService.guardarTransaccion(transaccion).subscribe(
      (response) => {
        console.log(response);
        alert("Transaccion guardada!")
      },
      (error) => {
        console.error(error);
        alert("Error al guardar transaccion!")
      }
    );
  }
}
