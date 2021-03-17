import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDashboardComponent } from './flights-dashboard.component';

describe('FlightsDashboardComponent', () => {
  let component: FlightsDashboardComponent;
  let fixture: ComponentFixture<FlightsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
