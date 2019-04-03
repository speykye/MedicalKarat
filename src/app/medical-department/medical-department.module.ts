import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalDepartmentComponent } from './medical-department.component';
import { MedicalDepartmentRoutingModule } from './medical-department-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [MedicalDepartmentComponent],
  imports: [
    CommonModule,
    MedicalDepartmentRoutingModule,
    NgZorroAntdModule
  ]
})
export class MedicalDepartmentModule { }
