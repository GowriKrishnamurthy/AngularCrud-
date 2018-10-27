import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

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
  selectedEmployeeId: number;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
      this.selectedEmployeeId = +this.activatedRoute.snapshot.paramMap.get('id');
  }
  handleClick() {
    this.notify.emit(this.employee);
  }

  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }
  
}
