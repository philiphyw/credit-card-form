import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFromControl } from '../shared/model/date-from-control';
import { CreditCard } from '../shared/model/credit-card.model';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  @Output() onSubmitCard = new EventEmitter<CreditCard>();

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16),
    ]),
    expiration: new DateFromControl('', [
      Validators.required,
    ]),
    securityCode: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cardForm.value);
    this.onSubmitCard.emit({
      name: this.cardForm.controls.name.value??'',
      cardNumber: this.cardForm.controls.cardNumber.value??'',
      expiration: this.cardForm.controls.expiration.value??'',
      securityCode: this.cardForm.controls.securityCode.value??'',
    })
  }

  onReset(){
    this.cardForm.reset();
  }


}
