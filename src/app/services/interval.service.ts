import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IntervalService {
    counter = 0;

    initializeInterval() {
        this.counter = this.counter + 1;
        
        return new Observable((observer) => {
            setInterval(() => {
                observer.next(this.counter);
            }, 1000);
        });
    }
}