import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProductComponent } from './input-product.component';

describe('InputProductComponent', () => {
  let component: InputProductComponent;
  let fixture: ComponentFixture<InputProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
