import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforAsyncComponent } from './ngfor-async.component';

describe('NgforAsyncComponent', () => {
  let component: NgforAsyncComponent;
  let fixture: ComponentFixture<NgforAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
