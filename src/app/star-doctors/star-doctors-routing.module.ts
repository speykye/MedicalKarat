import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarDoctorsComponent } from './star-doctors.component';

const routes: Routes = [{
    path: '',
    component: StarDoctorsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class StarDoctorsRoutingModule { }
