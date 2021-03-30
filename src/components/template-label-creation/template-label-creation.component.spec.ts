import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLabelCreationComponent } from './template-label-creation.component';

describe('TemplateLabelCreationComponent', () => {
  let component: TemplateLabelCreationComponent;
  let fixture: ComponentFixture<TemplateLabelCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateLabelCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLabelCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
