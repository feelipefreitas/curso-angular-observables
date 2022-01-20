import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { InOrderComponent } from './pages/in-order/in-order.component';
import { InputComponent } from './pages/input/input.component';
import { NgforAsyncComponent } from './pages/ngfor-async/ngfor-async.component';
import { ObservablePromiseComponent } from './pages/observable-promise/observable-promise.component';
import { PostsViewComponent } from './pages/posts-view/posts-view.component';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'comp1',
        pathMatch: 'full'
    },
    {
        path: 'comp1',
        component: Comp1Component
    },
    {
        path: 'comp2',
        component: Comp2Component
    },
    {
        path: 'input',
        component: InputComponent
    },
    {
        path: 'in-order',
        component: InOrderComponent
    },
    {
        path: 'ngfor',
        component: NgforAsyncComponent
    },
    {
        path: 'posts-view',
        component: PostsViewComponent
    },
    {
        path: 'obs-promise',
        component: ObservablePromiseComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }