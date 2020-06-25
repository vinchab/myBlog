import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private _currentId: string
  public post$: Observable<any>

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute) { }

  async ngOnInit(): Promise<any> {
    this._currentId = this.route.snapshot.paramMap.get('id')

    this.post$ = await this.postsService.getPostById(this._currentId)
  }
}
