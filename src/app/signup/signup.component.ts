import { Component, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  phoneNumber!: string;

  constructor(private userService: UserService, private router: Router) {}

  // @ViewChild('form') form!: NgForm;

  signup(form: NgForm) {
    if (this.password === this.repeatPassword) {
      this.userService
        .userSignup(this.username, this.password, this.email, this.phoneNumber)
        .subscribe(
          (response) => {
            console.log(response);
            form.resetForm();
            this.router.navigate(['/login']);
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
