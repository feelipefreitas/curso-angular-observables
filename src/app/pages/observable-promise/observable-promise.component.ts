import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.scss']
})
export class ObservablePromiseComponent implements OnInit {

  constructor(private _postsService: PostsService) { }

  async ngOnInit() {
    try {
      const post = await this._postsService.getPostHTTP().toPromise();
      console.log('HTTP', post);
  
      const postsList = await this._postsService.getPostsCONSTRUCTOR().toPromise();
      console.log('CONSTRUCTOR', postsList);
    } catch(error) {
      console.log('OCORREU UM ERRO', error);
    }
  }

}
