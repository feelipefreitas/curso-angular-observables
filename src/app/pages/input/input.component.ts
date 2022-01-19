import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, debounceTime } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {

  @ViewChild('inputText', { static: true }) 
    inputTextRef: ElementRef<HTMLInputElement> = {} as ElementRef<HTMLInputElement>;

  constructor(private _postsService: PostsService) { }

  ngAfterViewInit(): void {
    fromEvent(this.inputTextRef.nativeElement, 'input')
    .pipe(
      debounceTime(2000),
      concatMap(() => this._postsService.getPostHTTP(this.inputTextRef.nativeElement.value))
    )
    .subscribe((event) => console.log('FINALIZADO'));
  }
}
