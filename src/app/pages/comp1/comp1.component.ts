import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, OnDestroy {

  initializeIntervalSubs: Subscription = new Subscription();

  constructor(private _intervalService: IntervalService) { }

  ngOnInit(): void {
    this.initializeIntervalSubs = this._intervalService.initializeInterval().subscribe((counter) => {
      console.log(counter + ' => comp1');
    });
  }

  ngOnDestroy(): void {
    this.initializeIntervalSubs.unsubscribe();
  }
}
