import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCriterionButtonComponent } from './sort-criterion-button.component';

describe('SortCriterionButtonComponent', () => {
  let component: SortCriterionButtonComponent;
  let fixture: ComponentFixture<SortCriterionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortCriterionButtonComponent]
    });
    fixture = TestBed.createComponent(SortCriterionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
