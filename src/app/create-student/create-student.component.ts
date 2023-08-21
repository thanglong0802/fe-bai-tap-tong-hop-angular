import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { StudentServiceService } from '../service/student-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  id: number | undefined;

  constructor(private studentService: StudentServiceService) {}

  create: StudentComponent = new StudentComponent();

  submit(form: NgForm) {
    this.studentService
      .create(
        this.create.name,
        this.create.age,
        this.create.phoneNumber,
        this.create.dob,
        this.create.intro,
        this.create.email,
        this.create.majors
      )
      .subscribe(
        (response) => {
          console.log(this.create.dob);

          console.log('Create successfully', response);
          form.resetForm();
        },
        (error) => {
          console.error('Create failed', error);
        }
      );
  }
}
