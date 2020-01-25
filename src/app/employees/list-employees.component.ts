import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  // router is used, selector can be removed.
  // selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  listEmployees: Employee[] = [];
  employeeToDisplay: Employee;
  dataFromChild: Employee;
  _searchQueryString: string;

  // Use this property to stored filtered employees, so we do not
  // lose the original list and do not have to make a round trip
  // to the web server on every new search
  filteredEmployees: Employee[];

  constructor(private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value
  get searchQueryString(): string {
    return this._searchQueryString;
  }
  // This setter is called everytime the value in the search text box changes
  set searchQueryString(value: string) {
    this._searchQueryString = value;
    this.filteredEmployees = this.filterEmployees(value);
  }
  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }

  ngOnInit() {
    this.empService.getEmployees().subscribe((empList) => {
      // This code executes asynchronously. When the data is returned
      // after the 2 seconds delay, that's when the employees property is set
      this.listEmployees = empList;
    });
  
    // This code will not wait for 2 seconds. After a call to the subscribe() method
    // is issued, the application continues to process the below lines of code. So for
    // those 2 seconds this.employees property is undefined, and with in that time, the
    // below code is executed which can have 2 serious implications
    // 1. The list page will not display any data
    // 2. Cannot read property 'length' of undefined error in the console
      this.route.queryParamMap.subscribe(params => {
        if (params.has('searchQueryString')) {
          this.searchQueryString = params.get('searchQueryString');
        } else {
          this.filteredEmployees = this.listEmployees;
        }
      });
    }
    

  filterEmployees(searchString: string) {
    return this.listEmployees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  nextEmployee(): void {
    if (this.employeeToDisplay.id <= this.listEmployees.length - 1) {
      this.employeeToDisplay = this.listEmployees[this.employeeToDisplay.id];
    } else {
      this.employeeToDisplay = this.listEmployees[0];
    }
  }
  onClick(employeeId: number) {
    this.router.navigate(['employees', employeeId], {
      queryParams: { 'searchQueryString': this._searchQueryString, 'testParam': 'testValue' }
    });
  }
}
