import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  s = 0;

  onClick() {
    this.s++;
    console.log(this.s);
  }
}
