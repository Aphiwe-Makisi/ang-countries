import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  countries: any[] = []
  filteredCountries: any[] = []
  filter!: string

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchAll().subscribe(data => {
      this.countries = data
      this.filteredCountries = this.countries
    })

  }

  filterByRegion(value: string) {
    let countries: any[] = []
    if (value === 'All') {
      countries = this.countries
    } else {
      this.countries.filter(country => {
        if (country.region === value) {
          countries.push(country)
        }
      })
    }
    this.filteredCountries = countries
  }

}
