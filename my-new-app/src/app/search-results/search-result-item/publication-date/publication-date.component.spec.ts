import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDateComponent } from './publication-date.component';

describe('PublicationDateComponent', () => {
  let component: PublicationDateComponent;
  let fixture: ComponentFixture<PublicationDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationDateComponent]
    });
    fixture = TestBed.createComponent(PublicationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
