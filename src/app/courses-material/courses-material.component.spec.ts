import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMaterialComponent } from './courses-material.component';

describe('CoursesMaterialComponent', () => {
  let component: CoursesMaterialComponent;
  let fixture: ComponentFixture<CoursesMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
