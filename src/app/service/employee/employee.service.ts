import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../model/employee";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private host = environment.apiBaseUrl;
  private rest = environment.apiRest;

  constructor(private http: HttpClient) { }

  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.host}/${this.rest}/employee/find-all`);
  }

  public createNemEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.host}/${this.rest}/employee/create`, employee);
  }

  public updateEmployee(employee: Employee, employeeId: Number): Observable<Employee> {
    return this.http.post<Employee>(`${this.host}/${this.rest}/employee/update?id=${employeeId}`,employee);
  }

  public deleteEmployee(employeeId: Number) {
    return this.http.post(`${this.host}/${this.rest}/employee/delete?id=${employeeId}`, null,{responseType: 'text'});
  }
}
