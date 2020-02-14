import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datepicker-playground';
  limitedMonthPickerRange: { [key: string]: any } = {
    min: '',
    max: ''
  };
  limitedYearPickerRange: { [key: string]: any } = {
    min: '',
    max: ''
  };

  constructor() {
    this.limitedMonthPickerRange.min = new Date('02/20/2020');
    this.limitedMonthPickerRange.max = new Date('03/21/2020');
    this.limitedYearPickerRange.min = new Date('02/20/2020');
    this.limitedYearPickerRange.max = new Date('02/18/2021');
  }
}
