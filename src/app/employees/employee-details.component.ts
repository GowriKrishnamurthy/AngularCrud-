import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  // Private id field to keep track of the route parameter value
  private id;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router) { }

  // Extract the route parameter value and retrieve that specific
  // empoyee details using the EmployeeService
  ngOnInit() {
    // paramMap property returns an Observable.
    // subscribe to it to listen to any changes in route parameter value
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.employee = this.employeeService.getEmployee(this.id);
    })
  }

  // Everytime this method is called the employee id value is
  // incremented by 1 and then redirected to the same route
  // but with a different id parameter value
  getNextEmployee() {
    if (this.id < this.employeeService.getEmployeeCount())
      this.id = this.id + 1;
    else
      this.id = 1;
    this.router.navigate(['employees', this.id], {
      queryParamsHandling:  'preserve'
    });

  }
}
