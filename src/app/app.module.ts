import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CenterElements1Component } from './center-elements-1/center-elements-1.component';
import { CenterElements2Component } from './center-elements-2/center-elements-2.component';
import { CenterElements3Component } from './center-elements-3/center-elements-3.component';
import { CssPseudoclassComponent } from './css-pseudoclass/css-pseudoclass.component';
import { CenterElements4Component } from './center-elements-4/center-elements-4.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CenterElements1Component, CenterElements2Component, CenterElements3Component, CssPseudoclassComponent, CenterElements4Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
