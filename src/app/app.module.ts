import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { DatePipe } from '@angular/common';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AuthComponent } from './user/auth.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    SignupAdminComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
    StudentSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthComponent,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
