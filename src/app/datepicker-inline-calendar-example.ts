import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-calendar-example',
  templateUrl: 'datepicker-inline-calendar-example.html',
  styleUrls: ['datepicker-inline-calendar-example.css'],
})
export class DatepickerInlineCalendarExample {
  selected: Date | null;
  @Input() selectedRangeValue: DateRange<Date> | undefined;
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();

  selectedChange(m: any) {
    if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
      this.selectedRangeValue = new DateRange<Date>(m, null);
    } else {
      const start = this.selectedRangeValue.start;
      const end = m;
      if (end < start) {
        this.selectedRangeValue = new DateRange<Date>(end, start);
      } else {
        this.selectedRangeValue = new DateRange<Date>(start, end);
      }
    }
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
    console.log({ range: this.selectedRangeValue });
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */