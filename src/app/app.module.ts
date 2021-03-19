import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FieldExtractionComponent } from 'src/components/field-extraction/field-extraction.component';


@NgModule({
  declarations: [AppComponent, FieldExtractionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PdfViewerModule,
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
