import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('withdraw') withdraw!: ElementRef;
  @ViewChild('deposit') deposit!: ElementRef;
  balance = 5000;
  withdrawFlag = false;
  depositFlag = false;

  onWithdraw() {
    this.withdrawFlag = true;
  }
  onWithdrawMoney() {
    this.balance -= this.withdraw.nativeElement.value;
  }
  onDeposit() {
    this.depositFlag = true;
  }
  onDepositMoney() {
    this.balance += this.deposit.nativeElement.value;
  }
}
