import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
