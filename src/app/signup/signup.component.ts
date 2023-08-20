import { Component, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  userName = new FormControl('');

  signupForm = new FormGroup({
    usernames: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    passwords: new FormControl('', Validators.required),
    repeatPasswords: new FormControl('', Validators.required),
    emails: new FormControl('', [Validators.required, Validators.email]),
    phoneNumbers: new FormControl('', Validators.required),
  });

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

  signupFormSubmit() {
    console.log(this.signupForm.value);
    console.log(this.signupForm.get('usernames'));
    return this.signupForm.get('passwords')?.value;
    // this.signupForm.reset();
  }
}
