import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countries: any[] = [];
  filteredCountries: any[] = [];
  // searchQuery!: string

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchAll().subscribe((data) => {
      this.countries = data;
      this.filteredCountries = this.countries;
    });
  }

  filterByRegion(value: string) {
    let countries: any[] = [];
    if (value === 'All') {
      countries = this.countries;
    } else {
      this.countries.filter((country) => {
        if (country.region === value) {
          countries.push(country);
        }
      });
    }
    this.filteredCountries = countries;
  }

  filterBySearch(value: any) {
    // Initalise a local array and assign an empty array for now
    // going to push some data into it
    let searchedCountries: any[] = [];

    // check if the input is empty and display all countries
    if (value === '') {
      this.filteredCountries = this.countries;
    } else {
      // filter the global array to check for countirs whose name includes the value in the search box
      // when the condition is true push the country to the local array
      this.countries.filter((country) => {
        if (country.name.common.toLowerCase().includes(value.toLowerCase())) {
          searchedCountries.push(country);
        }
      });

      // assign the local array to the global one so that the contries are rendered
      this.filteredCountries = searchedCountries;
    }
  }
}
