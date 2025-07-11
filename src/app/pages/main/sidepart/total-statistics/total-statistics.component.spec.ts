import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatisticsComponent } from './total-statistics.component';

describe('TotalStatisticsComponent', () => {
  let component: TotalStatisticsComponent;
  let fixture: ComponentFixture<TotalStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
