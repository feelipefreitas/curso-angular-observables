import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPost } from './../interfaces/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostControllerService {
    postSelectedSubject = new Subject<IPost>();

    onPostSelected(postSelected: IPost) {
        this.postSelectedSubject.next(postSelected);
    }
}