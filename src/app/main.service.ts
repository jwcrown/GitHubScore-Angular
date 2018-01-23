import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import "rxjs/Rx";


@Injectable()
export class MainService {

  constructor(private _http: Http) { }


  getUser(username){
    if (username){
      console.log('Im in service' + username)
      return this._http.get(`https://api.github.com/users/${username}`).map( data => data.json()).toPromise();
    }
  }
}
