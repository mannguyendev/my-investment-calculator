// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { AnnualDataModel } from './app/investment-results/investment-results.model';

export function calculateInvestmentResults(
  initialInvestment: number,
  annualInvestment: number,
  expectedReturn: number,
  duration: number
) {
  const annualData: AnnualDataModel[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
