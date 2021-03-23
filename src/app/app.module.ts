import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FieldExtractionComponent } from 'src/components/field-extraction/field-extraction.component';
import { LoginComponent } from 'src/components/login/login.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, FieldExtractionComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // PdfViewerModule,
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
