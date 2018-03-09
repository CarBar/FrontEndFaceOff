import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorrisFactComponent } from './norris-fact.component';

describe('NorrisFactComponent', () => {
  let component: NorrisFactComponent;
  let fixture: ComponentFixture<NorrisFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorrisFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorrisFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
