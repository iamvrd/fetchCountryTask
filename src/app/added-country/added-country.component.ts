import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-added-country',
  templateUrl: './added-country.component.html',
  styleUrls: ['./added-country.component.css']
})
export class AddedCountryComponent implements OnInit {
 @Input() countryData;
  constructor() { }

  ngOnInit() {
    console.log(this.countryData);
  }

}
