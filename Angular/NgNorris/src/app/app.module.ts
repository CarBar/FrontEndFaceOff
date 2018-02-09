import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FactFinderService } from './fact-finder.service';
import { NorrisFactFinderComponent } from './norris-fact-finder/norris-fact-finder.component';


@NgModule({
  declarations: [
    AppComponent,
    NorrisFactFinderComponent
  ],
  imports: [
    BrowserModule
    , NgbModule.forRoot()
  ],
  providers: [FactFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
