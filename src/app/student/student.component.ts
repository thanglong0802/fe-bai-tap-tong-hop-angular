import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  constructor() {
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.phoneNumber = '';
    this.intro = '';
    this.email = '';
    this.majors = '';
    this.userName = '';
    this.isDelete = false;
  }

  id: number;
  name: string;
  age: number;
  phoneNumber: string;
  dob!: Date;
  intro: string;
  email: string;
  majors: string;
  userName: string;
  createDate!: Date;
  lastUpdate!: Date;
  isDelete: boolean;
}
