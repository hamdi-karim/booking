import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersInformationComponent } from './passengers-information.component';

describe('PassengersInformationComponent', () => {
  let component: PassengersInformationComponent;
  let fixture: ComponentFixture<PassengersInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
