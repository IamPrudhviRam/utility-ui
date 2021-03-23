import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'field-extraction',
  templateUrl: './field-extraction.component.html',
  styleUrls: ['./field-extraction.component.css'],
})
export class FieldExtractionComponent implements OnInit {
  title = 'Invoice-UI';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  positions: any = '';
  initialPosition: any = { x1: 0, x2: 100, y1: 0, y2: 100 };

  constructor() {}

  ngOnInit(): void {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.positions = event.imagePosition;
    console.log(
      'This position needs to be stored in the database. Will be sent to backend.'
    );
    console.log(event.imagePosition);
  }

  imageLoaded() {
    console.log('Image Loaded Sucessfully');
  }

  cropperReady() {
    this.initialPosition = { x1: 0, x2: 100, y1: 0, y2: 100 };
    console.log('Cropper Ready');
  }

  loadImageFailed() {
    console.log('Image Load Failed');
    alert('Image failed to load. Please try again');
  }
}
