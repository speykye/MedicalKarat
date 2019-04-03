import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() isLoading: boolean;
  private startTime;
  public classes: any = [{
    title: '内科常见疾病',
    diseases: ['甲亢', '乙肝', '胃炎', '高血脂', '脑梗塞', '强直性脊柱炎', '癫痫', '痛风', '哮喘', '肺结核', '胃溃疡', '克罗恩病', '肝硬化']
  }, {
    title: '神经内科常见疾病',
    diseases: ['脑梗塞', '癫痫', '面瘫', '三叉神经痛', '老年痴呆', '脑血栓形成', '帕金森病', '脑供血不足', '失眠', '面肌抽搐', '重症肌无力']
  }, {
    title: '内分泌科常见病',
    diseases: ['甲亢', '高尿酸血症', '痛风', '甲状腺炎', '糖尿病足', '肥胖症', '低血糖', '甲减', '亚甲炎', '甲状腺瘤侏儒症', '习惯性流产']
  }, {
    title: '风湿免疫科疾病',
    diseases: ['强直性脊柱炎', '风湿病', '类风湿性关节炎', '干燥综合征', '特发性关节痛综合征', '硬皮症', '系统性红斑狼疮白塞病']
  },{
    title: '心血管内科常见病',
    diseases: ['']
  }]
  constructor() { }

  changeItem(change) {
    this.isLoading = true;
    if (change.name.currentValue != change.name.previousValue) {
      clearTimeout(this.startTime);
      this.startTime = setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    } else {
      this.startTime = setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }

  ngOnInit() {
    this.isLoading = true;
    this.name = '内科';
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnChanges(change: SimpleChanges) {
    this.changeItem(change);
  }

}
