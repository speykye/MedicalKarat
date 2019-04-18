import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { MyIntegralComponent } from './my-integral.component';
import { MyIntegralRoutingModule } from './my-integral-routing.module';

@NgModule({
  declarations: [MyIntegralComponent],
  imports: [
    CommonModule,
    MyIntegralRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class MyIntegralModule { }
