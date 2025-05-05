import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedButtonComponent } from './proceed-button.component';

describe('ProceedButtonComponent', () => {
  let component: ProceedButtonComponent;
  let fixture: ComponentFixture<ProceedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceedButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProceedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
