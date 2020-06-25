import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private _url: string = 'https://jsonplaceholder.typicode.com'
  /* /posts/1/comments */

  constructor(private _http: HttpClient) { }

  getCommentByPost(id:string){
    return this._http.get<any>(`${this._url}/posts/${id}/comments`).toPromise()
  }
}
