import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntitiesCardComponent } from './legal-entities-card.component';

describe('LegalEntitiesCardComponent', () => {
  let component: LegalEntitiesCardComponent;
  let fixture: ComponentFixture<LegalEntitiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalEntitiesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalEntitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
