import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  // hardcoding temporarily
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@test.com',
      dateOfBirth: new Date('10/25/1978'),
      department: 'IT',
      isActive: true,
      picPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 1234431,
      dateOfBirth: new Date('11/20/1989'),
      department: 'HR',
      isActive: true,
      picPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 8127121,
      dateOfBirth: new Date('3/25/1985'),
      department: 'IT',
      isActive: false,
      picPath: 'assets/images/john.png'
    },
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }
  getEmployeeCount(): number {
    return this.listEmployees.length;
  }

  createEmployee(newEmployee: Employee) {
    this.listEmployees.push(newEmployee);
  }
}
