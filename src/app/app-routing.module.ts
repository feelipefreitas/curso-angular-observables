import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';

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
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }