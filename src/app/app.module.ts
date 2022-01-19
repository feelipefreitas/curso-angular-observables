import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { InputComponent } from './pages/input/input.component';
import { InOrderComponent } from './pages/in-order/in-order.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    InputComponent,
    InOrderComponent,
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
