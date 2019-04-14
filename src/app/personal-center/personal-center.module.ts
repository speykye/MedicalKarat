import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalCenterPipe } from './personal-center.pipe';
import { MyRegistrationComponent } from './my-registration/my-registration.component';

@NgModule({
  declarations: [
    PersonalCenterComponent,
    PersonalCenterPipe,
    MyRegistrationComponent
  ],
  imports: [
    CommonModule,
    PersonalCenterRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class PersonalCenterModule { }
