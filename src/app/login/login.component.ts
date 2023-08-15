import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.userService.userLogin(this.userName, this.password).subscribe(
      (response) => {
        localStorage.setItem('authencation-user', JSON.stringify(response));
        console.log('Login successfully', response);
        this.router.navigate(['/student']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
    form.resetForm();
  }
}
