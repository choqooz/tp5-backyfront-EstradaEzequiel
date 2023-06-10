import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  productos!: any[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe(
      (data: any) => {
        this.productos = data;
      },
      (error: any) => {
        console.log('Error obteniendo productos:', error);
      }
    );
  }
}
