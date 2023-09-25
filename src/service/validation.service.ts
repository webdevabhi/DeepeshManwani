import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  usersArr = [
    {
      number: 1234,
      password: '1234',
    },
    {
      number: 5678,
      password: '5678',
    },
  ];
  constructor(private route: Router) {}
  loginValidation(number: number, password: string) {
    if (this.usersArr.indexOf({ number: number, password: password })) {
      //login
      this.route.navigate(['/home']);
    }
  }
}
