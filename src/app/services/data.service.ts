import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital')
  }
}
