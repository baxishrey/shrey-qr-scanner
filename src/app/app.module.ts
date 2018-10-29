import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ZXingScannerModule} from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
