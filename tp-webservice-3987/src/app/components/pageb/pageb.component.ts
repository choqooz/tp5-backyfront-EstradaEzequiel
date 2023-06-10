import { Component } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent {

  constructor(private divisasService: DivisasService) { }

  currjson: any = [];
  quiero = '';
  tengo = '';
  cantidad: number = 1;
  resultado: number = 1;

  convertCurrency() {
    this.divisasService.getCurrency(this.tengo, this.quiero, this.cantidad)
      .subscribe(
        response => {
          console.log(response)
          this.resultado = response.new_amount;
        },
        error => {
          console.error(error);
        }
      );
  }
}
