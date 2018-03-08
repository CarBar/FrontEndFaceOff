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
  joke: string;
  constructor(private factService: FactFinderService) { }

  ngOnInit() {
    this.factService
      .getCategories()
      .first() // Only get the first value then unsubscribe to not have a leak.
      .subscribe(x => this.categories = x);

    Observable
      .interval(5000)
      .take(100)
      .subscribe(x => this.factService.getJoke(this.category).subscribe(y => this.joke = y));
  }

  getJoke(category: string) {
    this.factService
      .getJoke(category)
      .subscribe(j => this.joke = j);
  }

  setCategory(category: string) {
    this.category = category;
  }
}
