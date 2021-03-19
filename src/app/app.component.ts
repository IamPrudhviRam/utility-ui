import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Invoice-UI';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  positions: any = '';
  initialPosition: any = { x1: 0, x2: 100, y1: 0, y2: 100 };

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
    console.log('Cropper Ready');
  }

  loadImageFailed() {
    console.log('Image Load Failed');
    alert('Image failed to load. Please try again');
  }
}
