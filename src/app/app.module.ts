import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { InputComponent } from './pages/input/input.component';
import { InOrderComponent } from './pages/in-order/in-order.component';
import { NgforAsyncComponent } from './pages/ngfor-async/ngfor-async.component';
import { PostsViewComponent } from './pages/posts-view/posts-view.component';
import { PostsListComponent } from './pages/posts-view/components/posts-list/posts-list.component';
import { PostDetailsComponent } from './pages/posts-view/components/post-details/post-details.component';
import { ObservablePromiseComponent } from './pages/observable-promise/observable-promise.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    InputComponent,
    InOrderComponent,
    NgforAsyncComponent,
    PostsViewComponent,
    PostsListComponent,
    PostDetailsComponent,
    ObservablePromiseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
