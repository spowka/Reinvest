import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  emailForm: FormGroup;

  subjectAppeal: any;
  subjectAppeals: any[];

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit() {

    this.emailForm = this.fb.group({
      subjectAppeal: ['Тема обращения', Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    })

    this.subjectAppeals = [
      { label: 'Все', value: null },
      { label: 'Новая', value: 'New' },
      { label: 'Проверка', value: 'Check' },
      { label: 'Доработка', value: 'Modification' },
      { label: 'Активная', value: 'Active' },
      { label: 'Неактивная', value: 'NotActive' },
      { label: 'Тираж закончился', value: 'SoldOut' },
    ];
  }

  onSubmit() {

  }

}
