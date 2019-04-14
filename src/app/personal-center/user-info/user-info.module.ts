import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserInfoRoutingModule } from './user-info-routing.module';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    UserInfoRoutingModule
  ]
})
export class UserInfoModule { }
