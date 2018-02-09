import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorrisFactFinderComponent } from './norris-fact-finder.component';

describe('NorrisFactFinderComponent', () => {
  let component: NorrisFactFinderComponent;
  let fixture: ComponentFixture<NorrisFactFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorrisFactFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorrisFactFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
