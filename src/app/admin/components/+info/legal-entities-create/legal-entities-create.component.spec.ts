import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntitiesCreateComponent } from './legal-entities-create.component';

describe('LegalEntitiesCreateComponent', () => {
  let component: LegalEntitiesCreateComponent;
  let fixture: ComponentFixture<LegalEntitiesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalEntitiesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalEntitiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
