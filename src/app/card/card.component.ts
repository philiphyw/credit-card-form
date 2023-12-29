import { Component, Input } from '@angular/core';
import { CreditCard } from '../shared/model/credit-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() creditCard?:CreditCard

}
