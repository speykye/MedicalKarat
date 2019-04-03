import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalInformationComponent } from './medical-information.component';
import { MedicalInformationRoutingModule } from './medical-information-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [MedicalInformationComponent],
  imports: [
    CommonModule,
    MedicalInformationRoutingModule,
    NgZorroAntdModule
  ]
})
export class MedicalInformationModule { }
