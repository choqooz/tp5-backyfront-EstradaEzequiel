import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private _http: HttpClient) { }

  getCurrency(tengo: string, quiero: string, cantidad: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '54f898b0demshc5e2cd316755010p1a60aejsn472d7d5c5806',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
      }),
      params: new HttpParams()
        .append("have", tengo)
        .append("want", quiero)
        .append("amount", cantidad)
    }
    return this._http.get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency', httpOptions);
  }
}
