import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureCatalogComponent } from './structure-catalog.component';

describe('StructureCatalogComponent', () => {
  let component: StructureCatalogComponent;
  let fixture: ComponentFixture<StructureCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
