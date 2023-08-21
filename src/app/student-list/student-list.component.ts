import { Component, Input, OnInit } from '@angular/core';
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
  parseFn = parseInt;

  students: StudentComponent[] = [];
  student: any;
  studentFiler: StudentComponent[] = [];

  pageSize: number = 5;
  currentPage: number = 0;
  textSearch: string | null = null;
  totalPage?: number;

  totalPagess: number[] = [];

  // Biến lưu trữ username login
  userInfo: any = localStorage.getItem('authencation-user');

  userInfoParse = JSON.parse(this.userInfo);

  constructor(
    private studentService: StudentServiceService,
    private date: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getStudents();
    this.search();
    console.log(this.userInfoParse);
  }

  // onChange(event: any) {
  //   const newValue = event.value;
  //   console.log('text search onchange: ', newValue);
  // }

  private getStudents() {
    this.studentService.getStudentList().subscribe((response) => {
      this.students = response;
    });
  }

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(
      (response) => {
        console.log('Delete successfully', response);
        this.search();
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
    if (this.userInfoParse.role === 'USER') {
      this.studentService.findByUserName(this.userInfoParse.username).subscribe(
        (response) => {
          console.log(response);

          this.students = response;
        },
        (error) => {
          console.error('Error', error);
        }
      );
    } else {
      if (this.textSearch == null) {
        this.studentService
          .searchOrGetAll(this.pageSize, this.currentPage, null)
          .subscribe(
            (response) => {
              this.student = response;
              this.students = this.student.content;
              this.useStudentData(this.student);
            },
            (error) => {
              console.error('Error', error);
            }
          );
      } else {
        this.studentService
          .searchOrGetAll(
            this.pageSize,
            this.currentPage,
            this.textSearch.trim()
          )
          .subscribe(
            (response) => {
              console.log('Search', response);
              if (response) {
                this.student = response;
                this.students = this.student.content;
                this.useStudentData(this.student);
              }
            },
            (error) => {
              console.error('Error', error);
            }
          );
      }
    }
    // this.resetInput();
  }

  clearSearch() {}

  resetInput() {
    this.textSearch = '';
  }

  useStudentData(res: any) {
    const nonDuplicateNumbers = new Set<number>();
    // Duyệt số trang đang có và push vào 1 mảng, bên HTML for mảng để hiển thị số trang cho người dùng
    for (let i = 1; i <= res.totalPages; i++) {
      nonDuplicateNumbers.add(i);
    }

    // Chuyển Set thành mảng sử dụng toán tử spread trong ES6
    this.totalPagess = [...nonDuplicateNumbers];
  }

  onePage(one: number) {
    this.totalPage = Math.ceil(this.student.totalElements / this.pageSize);

    if (one === 999 && this.currentPage < this.totalPage) {
      this.currentPage = this.currentPage + 1;
    } else if (one === -999 && this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
    } else if (one || one === 0) {
      for (let i = 0; i < this.totalPagess.length; i++) {
        if (one === i) {
          this.currentPage = one;
        }
      }
    }

    this.student = this.search();
    if (this.student) {
      this.studentFiler = this.student.content;
    }
    const leng = this.studentFiler.length;

    if (this.currentPage < this.totalPage) {
      for (let i = 0; i < leng; i++) {
        if (
          i >= this.currentPage * this.pageSize &&
          i < (this.currentPage + 1) * this.pageSize
        ) {
          this.students.push(this.studentFiler[i]);
        }
      }
    } else {
      console.error(
        'the current page cannot be greater than the total number of pages'
      );
    }
  }
}
