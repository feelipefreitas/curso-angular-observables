import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer, of, throwError } from "rxjs";
import { IPost } from "../interfaces/post.interface";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    posts: IPost[] = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ];

    constructor(private _http: HttpClient) { }

    getPostsHTTP(): Observable<IPost[]> {
        console.log('getPostsHTTP');
        // return throwError(new HttpErrorResponse({
        //     status: 500,
        //     error: {
        //         message: 'Ocorreu um erro!'
        //     },
        //     statusText: 'NOT FOUND'
        // }));
        
        return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getPostsCONSTRUCTOR(): Observable<IPost[]> {
        console.log('getPostsCONSTRUCTOR');
        return new Observable((observer: Observer<IPost[]>) => {
            // observer.error('ERROR POSTS');
        
            observer.next(this.posts);
        });
    }

    getPostsOF(): Observable<IPost[]> {
        console.log('getPostsOF');
        // return throwError([]);

        return of(this.posts);
    }
}