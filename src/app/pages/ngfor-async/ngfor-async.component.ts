import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from './../../interfaces/post.interface';

@Component({
  selector: 'app-ngfor-async',
  templateUrl: './ngfor-async.component.html',
  styleUrls: ['./ngfor-async.component.scss']
})
export class NgforAsyncComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  getPostsHTTPSubs: Subscription = new Subscription();

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.getPostsHTTPSubs = this._postsService.getPostsHTTP().subscribe(
      (postsResponse) => this.posts = postsResponse
    );
  }

  ngOnDestroy(): void {
    this.getPostsHTTPSubs.unsubscribe();
  }

  get postsService() {
    return this._postsService;
  }

}
