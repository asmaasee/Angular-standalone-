import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationSalesComponent } from './station-sales.component';

describe('StationSalesComponent', () => {
  let component: StationSalesComponent;
  let fixture: ComponentFixture<StationSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
