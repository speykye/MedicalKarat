import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginActive } from './guard/login-ctrl';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'rapidDiagnosis',
  loadChildren: './rapid-diagnosis/rapid-diagnosis.module#RapidDiagnosisModule'
}, {
  path: 'medicalDepartment',
  loadChildren: './medical-department/medical-department.module#MedicalDepartmentModule'
}, {
  path: 'starDoctors',
  loadChildren: './star-doctors/star-doctors.module#StarDoctorsModule'
}, {
  path: 'medicalInformation',
  loadChildren: './medical-information/medical-information.module#MedicalInformationModule'
}, {
  path: 'personalCenter/:id',
  loadChildren: './personal-center/personal-center.module#PersonalCenterModule'
}, {
  path: 'aboutUs',
  loadChildren: './about-us/about-us.module#AboutUsModule'
}, {
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
