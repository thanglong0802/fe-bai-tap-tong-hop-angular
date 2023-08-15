import { Component, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username!: string;
  password!: string;
  repeatPassword!: string;
  email!: string;

  constructor(private userService: UserService) {}

  // @ViewChild('form') form!: NgForm;

  signup(form: NgForm) {
    if (this.password === this.repeatPassword) {
      this.userService
        .userSignup(this.username, this.password, this.email)
        .subscribe(
          (response) => {
            console.log('Register successfully', response);
          },
          (error) => {
            console.log('Register failed', error);
          }
        );
    } else {
      console.log('Mat khau khong trung khop');
    }
    form.resetForm();
  }
}
