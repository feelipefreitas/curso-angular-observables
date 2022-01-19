import { Component, OnInit} from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    // this._postsService.getPostHTTPERROR().subscribe(
    //   (postResponse) => {
    //     console.log('postResponse', postResponse);
    //   },
    //   (error) => {
    //     console.log('error subscribe', error)
    //   }
    // );

    // this._postsService.getPostHTTP().subscribe((postResponse) => {
    //   console.log('post', postResponse);
    // });

    // this._postsService.getPostsHTTP().subscribe(
    //   (postsListResponse: IPost[]) => {
    //     console.log('postsListResponse', postsListResponse);
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log('error', error);
    //   },
    //   () => {
    //     console.log('COMPLETE')
    //   }
    // );

    // this._postsService.getPostsCONSTRUCTOR().subscribe(
    //   (postsList: IPost[]) => {
    //     console.log('postsList', postsList);
    //   },
    //   (error) => {
    //     console.log('error CONSTRUCTOR', error);
    //   }
    // );

    // this._postsService.getPostsOF().subscribe(
    //   (postsListOF: IPost[]) => {
    //     console.log('postsListOF', postsListOF);
    //   },
    //   (error) => {
    //     console.log('error OF', error);
    //   }
    // );
  }
}
