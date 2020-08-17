import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material/button';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

// import {DialogModule} from 'primeng/dialog';
import {DialogModule, Dialog} from 'primeng/dialog'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

  
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    BulkUploadComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule  ,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    
  ],
  providers: [Dialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
