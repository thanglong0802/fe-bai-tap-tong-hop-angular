import { Component, ElementRef, ViewChild } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css'],
})
export class StudentSearchComponent {
  // pageSize: number = 10;
  // currentPage: number = 0;
  // textSearch!: string;
  // lsSearch: StudentComponent[] = [];
  // constructor(private studentService: StudentServiceService) {}
  // search(txt: string) {
  //   console.log(txt);
  //   this.studentService
  //     .searchOrGetAll(this.pageSize, this.currentPage, this.textSearch)
  //     .subscribe(
  //       (response) => {
  //         console.log('Search', response);
  //         this.lsSearch = response;
  //       },
  //       (error) => {
  //         console.error('Error', error);
  //       }
  //     );
  //   this.resetInput();
  // }
  // resetInput() {
  //   this.textSearch = '';
  // }
}
