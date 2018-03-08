import { Component, OnInit } from '@angular/core';
import { FactFinderService } from '../services/fact-finder.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-norris-fact-finder',
  templateUrl: './norris-fact-finder.component.html',
  styleUrls: ['./norris-fact-finder.component.css']
})
export class NorrisFactFinderComponent implements OnInit {

  categories: string[] = [];
  category: string;
  random = false;
  joke: string;
  secondsToJoke = 0;
  jokeInterval = 5;

  constructor(private factService: FactFinderService) { }

  ngOnInit() {
    this.factService
      .getCategories()
      .first() // Only get the first value then unsubscribe to not have a leak.
      .subscribe(x => this.categories = x);

    Observable.timer(0, 1000)
      .subscribe(x => {
        if (this.secondsToJoke > 0) {
          this.secondsToJoke--;
        }
        if (!this.secondsToJoke) {
          this.factService.getJoke(this.category).subscribe(y => this.joke = y);
          this.secondsToJoke = this.jokeInterval;
        }
      });
  }

  getJoke(category: string) {
    this.factService
      .getJoke(category)
      .subscribe(j => this.joke = j);
  }

  toggleRandom(event: boolean) {
    this.random = event;
    if (this.random) {
      this.category = null;
    }
  }

  setCategory(category: string) {
    this.category = category;
  }
}
