
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AppService {

  constructor(private _http:HttpClient) { }
 
 private _countryUrl= 'https://web-travel-test.cc.uic.edu/countries';

  getCountryData(): Observable<any>{
    return this._http.get(this._countryUrl)
    
  }

  

}

