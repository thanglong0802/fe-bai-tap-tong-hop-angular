import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'admin/signup',
    component: SignupAdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'student/list',
    component: StudentListComponent,
  },
  {
    path: 'create',
    component: CreateStudentComponent,
  },
  {
    path: 'detail/:id',
    component: StudentDetailsComponent,
  },
  {
    path: 'update/:id',
    component: StudentUpdateComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
