import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPost } from './../interfaces/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostControllerService {
    postSelectedSubject = new Subject<IPost>();

    onPostSelected(postSelected: IPost) {
        if(!postSelected.id) {
            this.postSelectedSubject.error('Não houve um post selecionado!');
        }

        this.postSelectedSubject.next(postSelected);
    }
}