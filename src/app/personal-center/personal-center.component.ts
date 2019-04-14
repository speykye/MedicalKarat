import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {
  public avatarStyle: any;
  public btnStyle: any;
  public integral: number;
  public loginTime: Date = new Date();
  public title: string;
  public remark: string;

  constructor() { }

  changeTitle(mode: string) {
    if (mode == 'registration') {
      this.title = '我的挂号单';
      this.remark = '这里记录了您所有的挂号信息！';
    }
    if (mode == 'consult') {
      this.title = '我的咨询';
    }
    if (mode == 'inquiry') {
      this.title = '我的问诊';
      this.remark = '这里记录了您所有的问诊信息！';
    }
    if (mode == 'doctors') {
      this.title = '我的医生';
      this.remark = '这里记录了您所有的问诊医生！';
    }
    if (mode == 'integral') {
      this.title = '我的积分';
      this.remark = '这里记录了您所有的积分情况！';
    }
    if (mode == 'discountCoupon') {
      this.title = '我的优惠券';
      this.remark = '管理我的优惠券！';
    }
    if (mode == 'drawMoney') {
      this.title = '现金提现';
      this.remark = '管理我的账户金额！';
    }
    if (mode == 'userInfo') {
      this.title = '个人信息';
      this.remark = '修改个人信息！';
    }
    if (mode == 'securitySettings') {
      this.title = '安全设置';
      this.remark = '修改密码及手机号码！';
    }
  }

  ngOnInit() {
    this.integral = 135;
    this.avatarStyle = {
      'display': 'block',
      'margin': '24px auto',
      'box-shadow': '0px 3px 2px #cbddde',
      'border': '8px solid #ffffff'
    };
    this.btnStyle = {
      'display': 'block',
      'margin': '0 auto'
    };
    this.title = '我的挂号单';
    this.remark = '这里记录了您所有的挂号信息！';
  }

}
