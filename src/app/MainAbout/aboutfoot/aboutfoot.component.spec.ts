import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfootComponent } from './aboutfoot.component';

describe('AboutfootComponent', () => {
  let component: AboutfootComponent;
  let fixture: ComponentFixture<AboutfootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutfootComponent]
    });
    fixture = TestBed.createComponent(AboutfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
