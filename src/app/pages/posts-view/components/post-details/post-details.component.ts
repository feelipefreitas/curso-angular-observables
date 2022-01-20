import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostControllerService } from 'src/app/services/post-controller.service';
import { IPost } from './../../../../interfaces/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  postSelected: IPost = {} as IPost;
  postSelectedSubjectSubs = new Subscription();

  constructor(private _postControllerService: PostControllerService) { }

  ngOnInit(): void {
    this.postSelectedSubjectSubs = this._postControllerService.postSelectedSubject.subscribe(
      (postSelected) => {
        console.log('postSelected', postSelected);
        
        this.postSelected = postSelected;
      },
      (error) => {
        console.log('ERROR => ', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.postSelectedSubjectSubs.unsubscribe();
  }
}
