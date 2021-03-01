import { Component } from '@angular/core';
import {CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries: any;
  country: any;
  
  constructor(private corona:CoronaService){}

  // Method is called when the component loads
  ngOnInit() {
    // this.corona allows you to access the functions you create in the service class
    // subscribe returns arrays of data
    this.corona.getCountries().subscribe((data)=> {
      console.log(data)
      this.countries = data
    })
  }

  getCoronaData() {
    this.corona.getCoronaRealtimeData(this.country).subscribe((data) => {
      console.log(data)
    })
  }

  getCountry(country: any) {
    this.country = country.target.value;
  }

}
