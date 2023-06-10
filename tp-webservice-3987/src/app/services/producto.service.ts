import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:3000/api/producto';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any[]>(this.baseUrl);
  }

  createProducto(producto: any) {
    return this.http.post(this.baseUrl, producto);
  }
}
