import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class PersonalCenterPipe implements PipeTransform {

  transform(value: any): any {
    let result;
    if(value >= 0 && value < 9){
      result = '早上好';
    }
    if(value >= 9 && value < 12){
      result = '上午好'
    }
    if(value >= 12 && value < 15){
      result = '中午好，吃完午饭小憩一会为下午补充能量';
    }
    if(value >= 15 && value < 18){
      result = '下午好';
    }
    if(value >= 18 && value < 24){
      result = '落木千山天远大，澄江一道月分明';
    }
    return result;
  }

}
