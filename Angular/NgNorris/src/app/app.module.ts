import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
  ],
  providers: [FactFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
