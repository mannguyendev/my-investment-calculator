import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { calculateInvestmentResults } from '../investment-results';
import { UserInputModel } from './user-input/user-input.model';
import { AnnualDataModel } from './investment-results/annual-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  investmentResults: AnnualDataModel[] = [];

  onCalculate(userInput: UserInputModel) {
    this.investmentResults = calculateInvestmentResults(
      userInput.initialInvestment,
      userInput.annualInvestment,
      userInput.expectedReturn,
      userInput.duration
    );

    console.log(this.investmentResults);
  }
}
