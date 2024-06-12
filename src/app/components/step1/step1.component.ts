import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import * as types from '../../types';

interface YearOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
})
export class Step1Component {
  selectedYear: string = '';
  selectedData: string = '';
  internalDesignation: string = '';

  constructor(private sharedService: SharedService) { }

  yearOptions: YearOption[] = [
    { value: '2024', viewValue: '2024' },
    { value: '2023', viewValue: '2023' },
    { value: '2022', viewValue: '2022' },
    { value: '2021', viewValue: '2021' },
  ];

  dataOptions: YearOption[] = [
    { value: 'data1', viewValue: 'Data 1' },
    { value: 'data2', viewValue: 'Data 2' },
    { value: 'data3', viewValue: 'Data 3' },
  ];

  ngOnInit() {
    const savedDatas1 = this.sharedService.getDatas1();
    if (savedDatas1.length > 0) {
      const lastSavedData = savedDatas1[savedDatas1.length - 1];
      this.selectedYear = lastSavedData.year;
      this.internalDesignation = lastSavedData.name;
      this.selectedData = lastSavedData.source;
    }
  }

  onSave(): void {
    const newData: types.Datas1 = {
      year: this.selectedYear,
      name: this.internalDesignation,
      source: this.selectedData
    };
    this.sharedService.saveDatas1([newData]);
  }

}
