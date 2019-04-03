import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  public stepOneForm: FormGroup;
  public radioValue = '郭熳怡';

  constructor(private fb: FormBuilder) { }

  _submitForm(formDatas: any) {

  }

  ngOnInit(): void {
    this.stepOneForm = this.fb.group({

    })
  }

}
