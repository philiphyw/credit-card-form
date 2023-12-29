import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFromControl } from '../shared/model/date-from-control';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
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
  }

  onReset(){
    this.cardForm.reset();
  }
}
