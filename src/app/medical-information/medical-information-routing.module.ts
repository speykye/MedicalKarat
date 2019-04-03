import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalInformationComponent } from './medical-information.component';

const routes: Routes = [{
    path: '',
    component: MedicalInformationComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class MedicalInformationRoutingModule { }
