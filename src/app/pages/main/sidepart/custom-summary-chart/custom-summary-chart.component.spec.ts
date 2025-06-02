import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSummaryChartComponent } from './custom-summary-chart.component';

describe('CustomSummaryChartComponent', () => {
  let component: CustomSummaryChartComponent;
  let fixture: ComponentFixture<CustomSummaryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSummaryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
