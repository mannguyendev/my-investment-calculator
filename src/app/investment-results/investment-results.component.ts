import { Component, input } from '@angular/core';
import { AnnualDataModel } from './investment-results.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<AnnualDataModel[] | undefined>();
}
