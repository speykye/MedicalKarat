import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departments: any = [{
    name: '内科',
    iconName: 'assets/icons/InternalMedicine-outline.png',
    selected: true,
    focus: true
  }, {
    name: '外科',
    iconName: 'assets/icons/surgeryDepartment.png',
    selected: false,
    focus: false
  }, {
    name: '妇产科',
    iconName: 'assets/icons/gynaecologyAndObstetrics.png',
    selected: false,
    focus: false
  }, {
    name: '皮肤科',
    iconName: 'assets/icons/dermatologyDepartment.png',
    selected: false,
    focus: false
  }, {
    name: '骨科',
    iconName: 'assets/icons/orthopedicsDepartment.png',
    selected: false,
    focus: false
  }, {
    name: '耳鼻喉科',
    iconName: 'assets/icons/otolaryngologyDepartment.png',
    selected: false,
    focus: false
  }];
  public tabStyle: any;
  public recordName;
  public loading: boolean;
  public validateForm: FormGroup;
  public today: Date = new Date();
  public cardStyle: any = {
    "height":"451px",
    "padding":"20px",
    "borderLeft":"none",
    "background":"url('assets/imgs/loginBGI.png') no-repeat center bottom"
  };

  constructor(private fb: FormBuilder) { }

  getStatus1(index, icon, name) {
    this.recordName = name;
    this.departments[index].selected = true;
    this.departments[index].focus = true;
    for (let i = 0; i < this.departments.length; i++) {
      this.departments[i].selected = false;
      this.departments[i].focus = false;
      if (i != index) {
        this.departments[i].iconName = this.departments[i].iconName.replace('-outline', '');
      } else {
        if (this.departments[index].iconName.indexOf('-outline') == -1) {
          this.loading = true;
          this.departments[index].iconName = this.departments[index].iconName.replace('.png','-outline.png');
        }
      }
    }
    this.recordName = this.departments[index].name;
  }

  blur1(index, icon) {
    this.departments[index].selected = false;
    this.departments[index].focus = true;
    for (let i = 0; i < this.departments.length; i++) {
      this.departments[i].selected = false;
    }
    if (this.departments[index].iconName.indexOf("-outline") == -1) {
      this.departments[index].iconName = icon + '-outline';
    } else {
      if (this.departments[index].iconName.indexOf("-outline") == -1) {
        this.departments[index].iconName = icon + '-outline';
      }
    }
  }

  getStatus2(index, icon, name) {
    this.recordName = name;
    this.departments[index].selected = true;
    this.departments[index].focus = true;
    for (let i = 0; i < this.departments.length; i++) {
      this.departments[i].selected = false;
      this.departments[i].focus = false;
      if (i != index) {
        this.departments[i].iconName = this.departments[i].iconName.replace('-outline', '');
      } else {
        if (this.departments[index].iconName.indexOf('-outline') == -1) {
          this.loading = true;
          this.departments[index].iconName = this.departments[index].iconName.replace('.png','-outline.png');
        }
      }
    }
    this.recordName = this.departments[index].name;
  }

  blur2(index, icon) {
    this.departments[index].selected = false;
    this.departments[index].focus = true;
    for (let i = 0; i < this.departments.length; i++) {
      this.departments[i].selected = false;
    }
    if (this.departments[index].iconName.indexOf("-outline") == -1) {
      this.departments[index].iconName = icon + '-outline';
    } else {
      if (this.departments[index].iconName.indexOf("-outline") == -1) {
        this.departments[index].iconName = icon + '-outline';
      }
    }
  }

  submitForm() {

  }

  ngOnInit() {
    this.tabStyle = {
      margin: 0
    };
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [null, [Validators.required]]
    });
  }

}
