import { Component } from '@angular/core';
import { CreditCard } from './shared/model/credit-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'credit-card-form';
  creditCard: CreditCard = {
    name: '',
    cardNumber: '',
    expiration: '',
    securityCode: '',
  };

  updateCreditCard(creditCard: CreditCard) {
    this.creditCard = creditCard;
  }
}
