import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public posts$: Observable<any>

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.load()
    this.posts$ = this.postsService.data$
  }

}
