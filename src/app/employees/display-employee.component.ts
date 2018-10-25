import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  // Parent component will use this Input property to pass
  // the employee object to which the template binds to
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> =  new  EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }
  handleClick() {
    this.notify.emit(this.employee);
  }
}
