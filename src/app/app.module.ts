import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColoraDirective } from './dire/colora.directive';
import { ComparsaDirective } from './dire/comparsa.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColoraDirective,
    ComparsaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
