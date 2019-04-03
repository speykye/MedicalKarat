import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RapidDiagnosisComponent } from './rapid-diagnosis.component';
import { RapidDiagnosisRoutingModule } from './rapid-diagnosis-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StepOneComponent } from './step-one/step-one.component';

@NgModule({
  declarations: [
    RapidDiagnosisComponent, 
    StepOneComponent
  ],
  imports: [
    CommonModule,
    RapidDiagnosisRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class RapidDiagnosisModule { }
