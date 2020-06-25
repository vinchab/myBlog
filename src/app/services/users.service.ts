import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url: string = 'https://jsonplaceholder.typicode.com'

  constructor(private _http: HttpClient) { }

  getUserById(id: string){
    return this._http.get<any>(`${this._url}/users/${id}`).toPromise()
  }
}
