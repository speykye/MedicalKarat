import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [PersonalCenterComponent],
  imports: [
    CommonModule,
    PersonalCenterRoutingModule,
    NgZorroAntdModule
  ]
})
export class PersonalCenterModule { }
