import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyIntegralComponent } from './my-integral.component';

const routes: Routes = [{
    path: '',
    component: MyIntegralComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class MyIntegralRoutingModule { }