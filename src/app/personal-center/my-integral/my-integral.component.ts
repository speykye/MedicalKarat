import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-integral',
  templateUrl: './my-integral.component.html',
  styleUrls: ['./my-integral.component.css']
})
export class MyIntegralComponent implements OnInit {
  public userIntegral: number;
  public sum: number;
  public times: any = ['近三个月', '近半年', '近一年'];
  public changeData: any;
  public integralTable: any;
  public balanceSelected: any = ['近三个月', '近半年', '近一年'];
  public defaultBalanceSelected: any;
  public balanceTable: any;

  constructor() { }

  ngOnInit() {
    this.userIntegral = 1200;
    this.sum = 0;
    this.changeData = this.times[0];
    this.integralTable = [{
      time: '2019-03-07',
      content: '平台预约问诊',
      integral: 100,
      residue: 100,
      remark: ''
    }, {
      time: '2019-03-07',
      content: '平台预约问诊',
      integral: 100,
      residue: 100,
      remark: ''
    }, {
      time: '2019-03-07',
      content: '平台预约问诊',
      integral: 100,
      residue: 100,
      remark: ''
    }, {
      time: '2019-03-07',
      content: '平台预约问诊',
      integral: 100,
      residue: 100,
      remark: ''
    }, {
      time: '2019-03-07',
      content: '平台预约问诊',
      integral: 100,
      residue: 100,
      remark: ''
    }];
    this.defaultBalanceSelected = this.balanceSelected[0];
    this.balanceTable = [];
  }

}
