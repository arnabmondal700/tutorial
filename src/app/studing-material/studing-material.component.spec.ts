import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudingMaterialComponent } from './studing-material.component';

describe('StudingMaterialComponent', () => {
  let component: StudingMaterialComponent;
  let fixture: ComponentFixture<StudingMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudingMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudingMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
