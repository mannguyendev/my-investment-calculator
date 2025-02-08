import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputModel } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  @Output() calculate = new EventEmitter<UserInputModel>();

  onSubmit() {
    console.log('Initial Investment: ', this.initialInvestment);
    console.log('Annual Investment: ', this.annualInvestment);
    console.log('Expected Return: ', this.expectedReturn);
    console.log('Duration: ', this.duration);
    this.calculate.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
