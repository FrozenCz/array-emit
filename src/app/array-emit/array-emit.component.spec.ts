import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayEmitComponent } from './array-emit.component';

describe('ArrayEmitComponent', () => {
  let component: ArrayEmitComponent;
  let fixture: ComponentFixture<ArrayEmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayEmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayEmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
