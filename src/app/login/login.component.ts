import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  login(event, datas) {

  }

  register(event, datas) {

  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean }  => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.passWord.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      telNum: ['', Validators.required],
      codeNum: ['', Validators.required],
      passWord: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      telNum: ['', Validators.required],
      passWord: ['', Validators.required],
      confirmPWD: ['', this.confirmationValidator]
    });
  }

}
