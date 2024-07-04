import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlognavComponent } from './blognav.component';

describe('BlognavComponent', () => {
  let component: BlognavComponent;
  let fixture: ComponentFixture<BlognavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlognavComponent]
    });
    fixture = TestBed.createComponent(BlognavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
