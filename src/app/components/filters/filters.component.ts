import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() filter = new EventEmitter<string>()
  @Output() search = new EventEmitter<string>()


  assignRegion(value: any) {
    this.filter.emit(value)
  }

  searchByCountryName(value: any) {
    this.search.emit(value)
  }

}
