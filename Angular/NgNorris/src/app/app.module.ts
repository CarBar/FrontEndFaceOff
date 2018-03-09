import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactFinderService } from './services/fact-finder.service';
import { NorrisFactFinderComponent } from './norris-fact-finder/norris-fact-finder.component';
import { UiSwitchModule } from '../../node_modules/ngx-toggle-switch/src';
import { NorrisFactComponent } from './norris-fact/norris-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    NorrisFactFinderComponent,
    NorrisFactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    UiSwitchModule
  ],
  providers: [FactFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
