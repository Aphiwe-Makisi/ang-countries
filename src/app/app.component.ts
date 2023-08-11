import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-countries';
  countries: any[] = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchAll().subscribe(data => {
      console.log(data);
      
      this.countries = data
    })
  }

}
