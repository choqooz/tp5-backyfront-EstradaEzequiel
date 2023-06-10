import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent {
  producto = {
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    stock: 0,
    destacado: false
  };

  constructor(private productoService: ProductoService, private router: Router) { }

  createProducto() {
    this.productoService.createProducto(this.producto).subscribe(
      () => {
        console.log('Producto creado exitosamente');
        alert('Producto creado exitosamente')
        this.router.navigate(['productos-lista']);
      },
      (error: any) => {
        console.log('Error al crear el producto:', error);
      }
    );
  }
}
