import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // template: '<p>{{data}}</p>',
})
export class StudentListComponent {
  data: string = '';

  // ngOnInit(): void {
  //   this.data = 'Hello word';
  // }
  students: StudentComponent[] = [
    {
      id: 1,
      firstName: 'long',
      lastName: 'nt',
      email: 'longnt@gmail.com',
    },
    {
      id: 2,
      firstName: 'quang',
      lastName: 'hh',
      email: 'quanghh@gmail.com',
    },
    {
      id: 3,
      firstName: 'quang',
      lastName: 'ld',
      email: 'quangld@gmail.com',
    },
  ];

  // student: StudentComponent | undefined;

  student: StudentComponent = {
    id: 4,
    firstName: 'duyen',
    lastName: 'nt',
    email: 'duyennt@gmail.com',
  };
}
