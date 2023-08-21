import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentComponent } from '../student/student.component';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  private baseUrl = 'http://localhost:6789/student';
  constructor(private htppClient: HttpClient) {}

  getStudentList(): Observable<StudentComponent[]> {
    return this.htppClient.get<StudentComponent[]>(`${this.baseUrl}`);
  }

  delete(id: number): Observable<any> {
    return this.htppClient.patch(`${this.baseUrl}/${id}`, { isDelete: true });
  }

  create(
    name: string,
    age: number,
    phoneNumber: string,
    dob: Date,
    intro: string,
    email: string,
    majors: string
  ): Observable<any> {
    return this.htppClient.post(`${this.baseUrl}`, {
      name,
      age,
      phoneNumber,
      dob,
      intro,
      email,
      majors,
    });
  }

  details(id: number): Observable<any> {
    return this.htppClient.get(`${this.baseUrl}/${id}`);
  }

  update(
    id: number,
    name: string,
    age: number,
    phoneNumber: string,
    dob: Date,
    intro: string,
    email: string,
    majors: string
  ): Observable<any> {
    return this.htppClient.put(`${this.baseUrl}`, {
      id,
      name,
      age,
      phoneNumber,
      dob,
      intro,
      email,
      majors,
    });
  }

  searchOrGetAll(
    pageSize: number,
    currentPage: number,
    textSearch: string | null = null
  ): Observable<StudentComponent[]> {
    return this.htppClient.post<StudentComponent[]>(`${this.baseUrl}/search`, {
      pageSize,
      currentPage,
      textSearch,
    });
  }

  findByUserName(userName: string): Observable<StudentComponent[]> {
    return this.htppClient.get<StudentComponent[]>(
      `${this.baseUrl}/find-username?userName=${userName}`
    );
  }
}
