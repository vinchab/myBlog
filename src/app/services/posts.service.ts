import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _url: string = 'https://jsonplaceholder.typicode.com'

  private _data$: BehaviorSubject<any> = new BehaviorSubject(null)
  public data$: Observable<any> = this._data$.asObservable()


  constructor(private _http: HttpClient) { }

  async load(): Promise<any> {
    const data = await this._http.get<any>(`${this._url}/posts`)
      .toPromise()
      .catch(err => err)
    
    this._data$.next(data)
  }

  getPostById(id: string){
    return this._http.get<any>(`${this._url}/posts/${id}`)
      .toPromise()
      .catch(err => err)
  }
}
