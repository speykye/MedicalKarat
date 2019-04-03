import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public companyInfo: any = ['企业地址', '黑龙江省哈尔滨市南岗区学府路196号', '网站导航']
  
  constructor() { }

  ngOnInit(): void {
  }
}
