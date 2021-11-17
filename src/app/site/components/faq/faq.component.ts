import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expandCollapseEnterLeave } from 'src/app/shared/animations/expandCollapse.animation';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [expandCollapseEnterLeave]
})
export class FAQComponent implements OnInit {
  emailForm: FormGroup;

  subjectAppeal: any;
  subjectAppeals: any[];
  isCollapsed: boolean;
  FAQs: any[] = [];

  constructor(
    private fb: FormBuilder
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

    let QuesttiosnAnswers: any = [
      {
        id: 1, subject: 'Тематика вопросов и ответов этого блока', QuesttionAnswer: [
          { id: 1, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 2, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 3, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 4, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
        ]
      },
      {
        id: 1, subject: 'Тематика вопросов и ответов этого блока', QuesttionAnswer: [
          { id: 1, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 2, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 3, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 4, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
        ]
      },
      {
        id: 1, subject: 'Тематика вопросов и ответов этого блока', QuesttionAnswer: [
          { id: 1, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 2, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 3, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
          { id: 4, questtion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit feugiat risus.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim hendrerit vulputate sit massa turpis. Sed at vel id gravida ut odio non. Quis luctus suscipit eu, id nunc laoreet vestibulum. Id eget mauris id consectetur at cursus a elit. In adipiscing malesuada natoque id tristique ipsum a nulla. Quam lacinia quis consequat, a lacus in integer a. Sapien turpis quam sed est elementum ac rutrum ultricies. Ac faucibus amet fermentum gravida turpis. Urna lobortis.' },
        ]
      },
    ]


    if (QuesttiosnAnswers) {
      this.FAQs = QuesttiosnAnswers.map(item => {
        item.QuesttionAnswer.forEach(faq => {
          return faq = { ...faq, isCollapsed: false }
        });

        return item;
      });
    }
  }

  onSubmit() {

  }
}
