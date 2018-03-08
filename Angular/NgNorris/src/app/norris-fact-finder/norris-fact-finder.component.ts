import { Component, OnInit } from '@angular/core';

import { FactFinderService } from '../services/fact-finder.service';

@Component({
  selector: 'app-norris-fact-finder',
  templateUrl: './norris-fact-finder.component.html',
  styleUrls: ['./norris-fact-finder.component.css']
})
export class NorrisFactFinderComponent implements OnInit {

  categories: string[] = [];
  joke: string;
  constructor(private factService: FactFinderService) { }

  ngOnInit() {
    this.factService
      .getCategories()
      .subscribe(x => this.categories = x);
  }

  getJoke(category: string) {
    this.factService.getJoke(category)
    .subscribe(j => this.joke = j);
  }

}
