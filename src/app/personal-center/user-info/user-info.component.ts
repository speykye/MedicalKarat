import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public userInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  modifyInfo(data: any) {
    console.log(data);
  }

  ngOnInit() {
    this.userInfoForm = this.fb.group({
      telNum: ['', Validators.required],
      code: ['', Validators.required],
      email: ['', [Validators.required]],
      name: ['', Validators.required],
      idCard: ['', [Validators.required]],
      telNumPrefix: ['+86'],
      idCardPrefix: ['身份证']
    })
  }

}
