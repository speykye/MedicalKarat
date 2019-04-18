import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { SecuritySettingsRoutingModule } from './security-settings-routing.module';
import { SecuritySettingsComponent } from './security-settings.component';

@NgModule({
  declarations: [SecuritySettingsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    SecuritySettingsRoutingModule
  ]
})
export class SecuritySettingsModule { }
