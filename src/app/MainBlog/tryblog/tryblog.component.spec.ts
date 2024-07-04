import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryblogComponent } from './tryblog.component';

describe('TryblogComponent', () => {
  let component: TryblogComponent;
  let fixture: ComponentFixture<TryblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryblogComponent]
    });
    fixture = TestBed.createComponent(TryblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
