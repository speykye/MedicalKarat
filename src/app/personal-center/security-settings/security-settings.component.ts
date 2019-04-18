import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent implements OnInit {
  public userCount: any;
  public visible: boolean;
  public modifyPWDForm: FormGroup;
  public modifyTelForm: FormGroup;
  public modifyMailForm: FormGroup;
  public shadowName: string;

  constructor(private fb: FormBuilder) { }

  open(name: string) {
    this.shadowName = name;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  modify(data: any) {
    console.log(data);
  }


  ngOnInit() {
    this.userCount = '1394602XXXX';
    this.visible = false;
    this.modifyPWDForm = this.fb.group({
      newPWD: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPWD: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
    this.modifyTelForm = this.fb.group({
      telNum: [''],
      msgCode: ['']
    });
    this.modifyMailForm = this.fb.group({
      email: ['']
    })
  }

}
