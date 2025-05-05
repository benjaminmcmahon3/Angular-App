import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNightBannerComponent } from './day-night-banner.component';

describe('DayNightBannerComponent', () => {
  let component: DayNightBannerComponent;
  let fixture: ComponentFixture<DayNightBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayNightBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayNightBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
