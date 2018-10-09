import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gender = 'male';

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  // isActive=false;
  // defaut IT department selected
  department = '3';

  // create a property of type Partial<BsDatepickerConfig>
  datePickerConfig: Partial<BsDatepickerConfig>;

  // default DOB
  // dateOfBirth: Date = new Date(2018, 0, 30);

  // set containerClass property to the preferred values
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: true,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
