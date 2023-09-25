import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ValidationService } from 'src/service/validation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('numberInput') numberInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  userNumber!: number;
  userPassword!: string;
  title = 'project';

  constructor(private loginValidationService: ValidationService) {}
  ngOnInit(): void {
    console.log(this.userNumber, this.userPassword);
  }
  onFormSubmission(...args: any) {
    this.loginValidationService.loginValidation(
      this.numberInput.nativeElement.value,
      this.passwordInput.nativeElement.value
    );
  }
}
