import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuritySettingsComponent } from './security-settings.component';

const routes: Routes = [{
    path: '',
    component: SecuritySettingsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class SecuritySettingsRoutingModule { }