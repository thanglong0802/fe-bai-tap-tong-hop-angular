import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {
  update: StudentComponent = new StudentComponent();
  id: number | undefined;

  constructor(
    private activedRoute: ActivatedRoute,
    private studentService: StudentServiceService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((param) => (this.id = param['id']));
    if (this.id) {
      this.studentService.details(this.id).subscribe(
        (response) => {
          this.update = response;
        },
        (error) => console.error('Error', error)
      );
    }
  }

  submit(form: NgForm) {
    this.studentService
      .update(
        this.update.id,
        this.update.name,
        this.update.age,
        this.update.phoneNumber,
        this.update.dob,
        this.update.intro,
        this.update.email,
        this.update.majors
      )
      .subscribe(
        (response) => {
          console.log('Update successfully', response);
          form.resetForm();
        },
        (error) => console.error('Error', error)
      );
  }
}
