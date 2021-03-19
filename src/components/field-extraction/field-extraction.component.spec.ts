import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldExtractionComponent } from './field-extraction.component';

describe('FieldExtractionComponent', () => {
  let component: FieldExtractionComponent;
  let fixture: ComponentFixture<FieldExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldExtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
