import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalDepartmentComponent } from './medical-department.component';

const routes: Routes = [{
    path: '',
    component: MedicalDepartmentComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class MedicalDepartmentRoutingModule { }
