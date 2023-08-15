import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  id: number | undefined;
  student: StudentComponent = new StudentComponent();

  constructor(
    private activedRoute: ActivatedRoute,
    private studentService: StudentServiceService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((param) => (this.id = param['id']));
    if (this.id) {
      this.detail(this.id);
    }
  }

  private detail(id: number) {
    this.studentService.details(id).subscribe(
      (response) => {
        this.student = response;
      },
      (error) => {
        console.error('error', error);
      }
    );
  }
}
