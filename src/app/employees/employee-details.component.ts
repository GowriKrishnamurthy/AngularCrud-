import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  constructor(private route:ActivatedRoute,
  private employeeService:EmployeeService) { }

  ngOnInit() {
    const id= +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployee(id);
  }
}
