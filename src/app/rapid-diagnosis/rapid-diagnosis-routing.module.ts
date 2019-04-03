import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RapidDiagnosisComponent } from './rapid-diagnosis.component';
import { StepOneComponent } from './step-one/step-one.component';

const routes: Routes = [{
    path: '',
    component: RapidDiagnosisComponent,
    children: [{
        path: '',
        component: StepOneComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RapidDiagnosisRoutingModule { }
