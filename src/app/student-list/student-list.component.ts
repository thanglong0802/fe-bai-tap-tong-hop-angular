import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { StudentServiceService } from '../service/student-service.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // template: '<p>{{data}}</p>',
})
export class StudentListComponent implements OnInit {
  data: string = '';

  students: StudentComponent[] = [];
  student: any;

  pageSize: number = 10;
  currentPage: number = 1;
  textSearch!: string;

  constructor(
    private studentService: StudentServiceService,
    private date: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentList().subscribe((response) => {
      this.students = response;
    });
  }

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(
      (response) => {
        console.log('Delete successfully', response);
        this.getStudents();
      },
      (error) => {
        console.error('Delete failed', error);
      }
    );
  }

  details(id: number) {
    this.router.navigate(['/detail', id]);
  }

  update(id: number) {
    this.router.navigate(['/update', id]);
  }

  search() {
    console.log(this.textSearch);
    const search = this.textSearch.trim();
    this.studentService
      .searchOrGetAll(this.pageSize, this.currentPage, search)
      .subscribe(
        (response) => {
          console.log('Search', response);
          if (response.content.length > 0) {
            this.students = response.content;
          }
        },
        (error) => {
          console.error('Error', error);
        }
      );
    this.resetInput();
  }

  resetInput() {
    this.textSearch = '';
  }

  previous() {
    console.log('previous');
  }
}
