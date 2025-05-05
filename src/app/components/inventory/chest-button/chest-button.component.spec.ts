import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestButtonComponent } from './chest-button.component';

describe('ChestButtonComponent', () => {
  let component: ChestButtonComponent;
  let fixture: ComponentFixture<ChestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChestButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
