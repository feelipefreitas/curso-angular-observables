import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { IPost } from './../interfaces/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostControllerService {
    postSelectedSubject = new Subject<IPost>();
    behaviorSubject = new BehaviorSubject(0);

    onPostSelected(postSelected: IPost) {
        if(!postSelected.id) {
            this.postSelectedSubject.error('Não houve um post selecionado!');
        }

        this.postSelectedSubject.next(postSelected);

        this.behaviorSubject.next(1);
    }
}