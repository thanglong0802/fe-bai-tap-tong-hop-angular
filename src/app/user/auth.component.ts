import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthComponent implements HttpInterceptor {
  token: {} = {};

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Lấy token từ nơi lưu trữ nó (localStorage, sessionStorage, ...)
    const token = localStorage.getItem('authencation-user');
    const tokenParse = token ? JSON.parse(token) : JSON.stringify({});

    // Thêm token vào yêu cầu
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenParse.token}`,
      },
    });

    return next.handle(authRequest);
  }
}
