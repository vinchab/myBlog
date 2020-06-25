import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private _currentId: string
  private _userId: string
  public post$: Observable<any>
  public user: any

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private route: ActivatedRoute) { }

  async ngOnInit(): Promise<any> {
    this._currentId = this.route.snapshot.paramMap.get('id')

    this.post$ = await this.postsService.getPostById(this._currentId)

    this.getUserName()
  }

  async getUserName(){
    for (const [key, value] of Object.entries(this.post$)) {
      if(key === 'userId') this._userId = value
    }
    
    const user = await this.usersService.getUserById(this._userId)
   
    for (const [key, value] of Object.entries(user)) {
      if(key === 'name') this.user = value
    }
  }

}
