import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthComponent } from '../user/auth.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  userNameTouched: boolean = false;
  passwordTouched: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.userService.userLogin(this.userName, this.password).subscribe(
      (response) => {
        // this.authComponent.token = response;
        localStorage.setItem('authencation-user', JSON.stringify(response));
        console.log('Login successfully', response);
        this.router.navigate(['/student']);
        form.resetForm();
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  validateUserName() {
    if (!this.userName) {
      this.userName = '';
    }
    this.userNameTouched = true;
  }

  validatePassword() {
    if (!this.password) {
      this.password = '';
    }
    this.passwordTouched = true;
  }
}
