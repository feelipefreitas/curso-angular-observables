import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this._postsService.getPostsHTTP().subscribe(
      (postsResponse: IPost[]) => {
        this.posts = postsResponse;
      }
    );
  }
}
