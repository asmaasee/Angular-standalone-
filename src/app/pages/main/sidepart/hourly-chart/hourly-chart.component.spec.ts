import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySalesComponent } from './hourly-chart.component';

describe('HourlyChartComponent', () => {
  let component: HourlySalesComponent;
  let fixture: ComponentFixture<HourlySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlySalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
