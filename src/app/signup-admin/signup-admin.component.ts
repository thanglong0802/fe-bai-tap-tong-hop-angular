import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css'],
})
export class SignupAdminComponent {
  username!: string;
  password!: string;
  phoneNumber!: string;
  repeatPassword!: string;
  email!: string;
  role!: string;

  constructor(private userService: UserService) {}

  // @ViewChild('form') form!: NgForm;

  signupForAdmin(form: NgForm) {
    if (this.password === this.repeatPassword) {
      this.userService
        .userSignupWithAdmin(
          this.username,
          this.password,
          this.phoneNumber,
          this.email,
          this.role
        )
        .subscribe(
          (response) => {
            console.log('Register successfully', response);
            form.resetForm();
          },
          (error) => {
            console.log('Register failed', error);
          }
        );
    } else {
      console.log('Mat khau khong trung khop');
    }
  }
}
