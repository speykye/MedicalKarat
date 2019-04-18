import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-registration',
  templateUrl: './my-registration.component.html',
  styleUrls: ['./my-registration.component.css']
})
export class MyRegistrationComponent implements OnInit {
  public orderForm: FormGroup;
  public statusList: any = ['全部', '进行中', '已完成', '待审核'];
  public statusTime: any = ['近三个月', '近半年', '近一年'];
  public tableDatas: any = [];
  public statusColor: string;

  constructor(private fb: FormBuilder) { }

  confirm(formData: any) {

  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      status: [this.statusList[0]],
      time: [this.statusTime[0]]
    });
    this.tableDatas = [{
      id: '008454',
      doctor: '韩医生',
      patient: '韩梅梅',
      status: 1,
      time: '2018-03-07',
      sum: '5.00',
      fn: ctrl => {
        console.log(ctrl);
      },
      color: ''
    }, {
      id: '008455',
      doctor: '韩医生',
      patient: '李雷',
      status: 2,
      time: '2018-03-07',
      sum: '5.00',
      fn: ctrl => {
        console.log(ctrl);
      },
      color: ''
    }, {
      id: '008456',
      doctor: '韩医生',
      patient: '李华',
      status: 0,
      time: '2018-03-07',
      sum: '5.00',
      fn: ctrl => {
        console.log(ctrl);
      },
      color: ''
    }]
    const dataCtrl = arr => arr.map(item => {
      if(item.status == 1){
        item.status = '进行中';
        item.color = '#00bbca';
      }
      if (item.status == 2) {
        item.status = '已完成';
        item.color = '#666666';
      }
      if(item.status == 0){
        item.status = '待审核';
        item.color = '#ff0000';
      }
    });
    dataCtrl(this.tableDatas);
  }

}
