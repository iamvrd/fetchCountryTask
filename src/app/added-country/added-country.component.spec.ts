import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedCountryComponent } from './added-country.component';

describe('AddedCountryComponent', () => {
  let component: AddedCountryComponent;
  let fixture: ComponentFixture<AddedCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
