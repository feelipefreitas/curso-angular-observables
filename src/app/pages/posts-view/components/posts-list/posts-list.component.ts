import { Component, Input, OnInit } from '@angular/core';
import { PostControllerService } from 'src/app/services/post-controller.service';
import { IPost } from './../../../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input('postsList') postsList: IPost[] = [];

  constructor(private _postControllerService: PostControllerService) { }

  ngOnInit(): void {
  }

  postSelected(postSelected: IPost) {
    this._postControllerService.onPostSelected(postSelected);
  }
}
