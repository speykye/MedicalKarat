import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarDoctorsComponent } from './star-doctors.component';
import { StarDoctorsRoutingModule } from './star-doctors-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [StarDoctorsComponent],
  imports: [
    CommonModule,
    StarDoctorsRoutingModule,
    NgZorroAntdModule
  ]
})
export class StarDoctorsModule { }
