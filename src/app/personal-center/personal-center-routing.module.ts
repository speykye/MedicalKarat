import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalCenterComponent } from './personal-center.component';
import { MyRegistrationComponent } from './my-registration/my-registration.component';

const routes: Routes = [{
    path: '',
    component: PersonalCenterComponent,
    children: [{
        path: '',
        component: MyRegistrationComponent
    }, {
        path: 'myConsult',
        loadChildren: './my-consult/my-consult.module#MyConsultModule'
    }, {
        path: 'myInquiry',
        loadChildren: './my-inquiry/my-inquiry.module#MyInquiryModule'
    }, {
        path: 'myDoctors',
        loadChildren: './my-doctors/my-doctors.module#MyDoctorsModule'
    }, {
        path: 'myIntegral',
        loadChildren: './my-integral/my-integral.module#MyIntegralModule'
    }, {
        path: 'myDiscountCoupon',
        loadChildren: './my-discount-coupon/my-discount-coupon.module#MyDiscountCouponModule'
    }, {
        path: 'drawMoney',
        loadChildren: './draw-money/draw-money.module#DrawMoneyModule'
    }, {
        path: 'userInfo',
        loadChildren: './user-info/user-info.module#UserInfoModule'
    }, {
        path: 'securitySettings',
        loadChildren: './security-settings/security-settings.module#SecuritySettingsModule'
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersonalCenterRoutingModule { }
