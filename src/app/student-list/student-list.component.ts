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
  studentFiler: StudentComponent[] = [];

  pageSize: number = 2;
  currentPage: number = 0;
  textSearch: string | null = null;

  constructor(
    private studentService: StudentServiceService,
    private date: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getStudents();
    this.search();
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
    if (this.textSearch == null) {
      this.studentService
        .searchOrGetAll(this.pageSize, this.currentPage, null)
        .subscribe(
          (response) => {
            this.student = response;
            this.students = this.student.content;
          },
          (error) => {
            console.error('Error', error);
          }
        );
    } else {
      this.studentService
        .searchOrGetAll(this.pageSize, this.currentPage, this.textSearch.trim())
        .subscribe(
          (response) => {
            console.log('Search', response);
            if (response) {
              this.student = response;
              this.students = this.student.content;
            }
          },
          (error) => {
            console.error('Error', error);
          }
        );
    }
    this.resetInput();
  }

  resetInput() {
    this.textSearch = '';
  }

  previous() {
    console.log('previous');
  }

  next() {}

  nextPage() {
    const totalPages = Math.ceil(this.student.totalElements / this.pageSize);
    console.log(this.student.totalElements);
    console.log(this.pageSize);
    console.log(totalPages);

    if (this.currentPage < totalPages - 1) {
      this.currentPage = this.currentPage + 1;
      console.log(this.currentPage);

      this.studentFiler = [];
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = Math.min(
        (this.currentPage + 1) * this.pageSize,
        this.students.length
      );

      for (let i = startIndex; i < endIndex; i++) {
        this.studentFiler.push(this.students[i]);
      }

      console.log(this.studentFiler);
    }
  }
}
