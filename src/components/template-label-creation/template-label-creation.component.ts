import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-label-creation',
  templateUrl: './template-label-creation.component.html',
  styleUrls: ['./template-label-creation.component.css'],
})
export class TemplateLabelCreationComponent implements OnInit {
  templateLabelCreationForm: FormGroup;
  templateLabelCreationFormSubmitted: boolean = false;
  labelCount: number = -1;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.templateLabelCreationForm = this.formBuilder.group({
      templateName: ['', Validators.required],
      labels: new FormArray([]),
    });
    this.addLabel();
  }

  get templateLabelCreationFormValues() {
    return this.templateLabelCreationForm.controls;
  }

  get labelsValues() {
    return this.templateLabelCreationFormValues.labels as FormArray;
  }

  get labelsFormGroups() {
    return this.labelsValues.controls as FormGroup[];
  }

  addLabel() {
    this.templateLabelCreationFormSubmitted = false;
    this.labelCount = this.labelCount + 1;
    this.labelsValues.push(
      this.formBuilder.group({
        labelName: ['', Validators.required],
      })
    );
  }

  removeLabel() {
    this.templateLabelCreationFormSubmitted = false;
    this.labelsValues.removeAt(this.labelCount);
    this.labelCount = this.labelCount - 1;
  }

  onTemplateLabelCreationFormSubmit() {
    console.log('submitted');
    this.templateLabelCreationFormSubmitted = true;
    if (this.templateLabelCreationForm.invalid) {
      return;
    }
    alert(JSON.stringify(this.templateLabelCreationForm.value, null, 4));
  }
}
