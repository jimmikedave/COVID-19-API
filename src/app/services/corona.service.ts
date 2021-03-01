import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }


  // Retrieves the list of countries from the API
  getCountries():Observable<any>{
    const url = "https://api.covid19api.com/countries"
    return this.http.get<any>(url)
  }

  getCoronaRealtimeData(country: any):Observable<any> {
    const url = "https://api.covid19api.com/total/dayone/country/" + country;
    return this.http.get<any>(url)
  }
}
