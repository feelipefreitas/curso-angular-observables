import { Component, OnInit } from '@angular/core';
import { concatMap, tap } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-in-order',
  templateUrl: './in-order.component.html',
  styleUrls: ['./in-order.component.scss']
})
export class InOrderComponent implements OnInit {

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this._postsService.getPostHTTP().pipe(
      tap((postResponse) => console.log('TAP postResponse', postResponse)),
      concatMap(
        (postResponse2) => this._postsService.getPostsCONSTRUCTOR(postResponse2).pipe(
          tap((postsList) => console.log('TAP postsList', postsList))
        )
      )
    ).subscribe(
      () => {
        console.log('SUCESSO!');
      },
      () => {
        console.log('ERRO!');
      }
    );
  }
}
