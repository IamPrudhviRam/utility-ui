import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'field-extraction',
  templateUrl: './field-extraction.component.html',
  styleUrls: ['./field-extraction.component.css'],
})
export class FieldExtractionComponent implements OnInit {
  labelMappingForm: FormGroup;
  templateMappingForm: FormGroup;
  labelMappingFormSubmitted: boolean = false;
  templateMappingFormSubmitted: boolean = false;

  templateMappingFormDisplay: boolean = true;
  labelMappingFormDisplay: boolean = false;

  files: File = null;

  croppedImage: any = '';
  positions: any = '';
  initialPosition: any = { x1: 0, x2: 100, y1: 0, y2: 100 };
  img: any = 'assets/virginia4-6-1-page1.png';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.labelMappingForm = this.formBuilder.group({
      labels: ['', Validators.required],
    });
    this.templateMappingForm = this.formBuilder.group({
      billTemplate: ['', Validators.required],
    });
  }

  fileChangeEvent(event, inputFile) {
    if (event.target.files[0].type != 'application/pdf') {
      alert('Please upload only PDF files');
      inputFile.value = '';
      return;
    } else {
      this.files = event.target.files[0];
    }
  }

  get labelMappingFormValues() {
    return this.labelMappingForm.controls;
  }

  get templateMappingFormValues() {
    return this.templateMappingForm.controls;
  }

  onLabelMappingFormSubmit() {
    this.labelMappingFormSubmitted = true;
    if (this.labelMappingForm.invalid) {
      return;
    }
    var returnValue = this.labelMappingForm.value;
    returnValue.coords = this.positions;
    alert(JSON.stringify(returnValue, null, 4));
  }

  onTemplateMappingFormSubmit() {
    this.templateMappingFormSubmitted = true;
    if (this.templateMappingForm.invalid || this.files == null) {
      return;
    }
    this.templateMappingFormDisplay = false;
    this.labelMappingFormDisplay = true;
    var returnValue = this.templateMappingForm.value;
    returnValue.files = this.files;
    alert(JSON.stringify(returnValue, null, 4));
  }

  onLabelMappingFormReset() {
    this.labelMappingFormSubmitted = false;
    this.labelMappingForm.reset();
  }

  onTemplateMappingFormReset() {
    this.templateMappingFormSubmitted = false;
    this.templateMappingForm.reset();
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.positions = event.imagePosition;
  }

  imageLoaded() {
    console.log('Image Loaded Sucessfully');
  }

  cropperReady() {
    this.initialPosition = { x1: 0, x2: 50, y1: 0, y2: 50 };
    console.log('Cropper Ready');
  }

  loadImageFailed() {
    console.log('Image Load Failed');
    alert('Image failed to load. Please try again');
  }
}
