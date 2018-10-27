import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(empList: Employee[], searchQueryString: string): Employee[] {
    if (!empList || !searchQueryString)
      return empList;

    return empList.filter(emp => emp.name.toLocaleLowerCase().indexOf(searchQueryString.toLocaleLowerCase()) != -1);
  }
}
