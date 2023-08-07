import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrconvPipe } from './currencyPipe.pipe';
//import { SamplePipe } from './sample.pipe';
import { RemoveCommaPipe } from './removComma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrconvPipe,
    //SamplePipe,
    RemoveCommaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

