import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountryP: boolean=false;
  selectedCountry: boolean = false;
  title = 'consultAddTask';
  countries:any=[];
  displayTenCountry:any=[];
  length=10;
  showMoreBtn:boolean=true;
  showLessBtn:boolean=false;
  index=0;
  maxLength;
  showInput:boolean=false;
  country:string;
  userSelectedCountry:any=[];
  ngOnInit(){
    
 this._appService.getCountryData().subscribe(
  
          data => { 
       this.countries=data;
       
       this.setCountries(this.countries);
         }
  
    );

  }
  setCountries(countries){
    this.maxLength=countries.length;
    this.displayTenCountry=countries.slice(0,this.length);
    this.index=this.length+10;
  }
  showMore(){
    this.displayTenCountry=[];
    this.showLessBtn=true;
    if(this.index>this.maxLength){
      this.showMoreBtn=false;
    }
    this.displayTenCountry=this.countries.slice(this.length,this.index);
    this.length=this.index;
    this.index=this.index+10;    
  }
  showLess(){
    if(this.index<=0 || this.length<=0){
      this.showLessBtn=false;
      console.log("djfd");
     }
     else{
      console.log(this.length,this.index);
      this.length=this.length-20;
      this.index=this.index-20;
      this.displayTenCountry=this.countries.slice(this.length,this.index);
     }
  }
  getCountry(country){
    console.log("country",country);
    if(country.threatLevel==3 || country.threatLevel==4){
      alert(country.threatText);
    }
    if(country.threatLevel==1 || country.threatLevel==2){
     this.showInput=true;
     console.log(name);
    }
  }
  addUser(){
    this.userSelectedCountry.push({name:this.country});
    this.displayTenCountry.push({name:this.country});
    this.length++;
    this.index++;
    this.country=" ";
     this.showInput=false;
     this.selectedCountryP=true;
  }
  seeSelectedCountry(){

    this.selectedCountry=true;
    this.router.navigateByUrl('/addedCountries');
  }
  constructor(private _appService:AppService,private router:Router){
  }
}
