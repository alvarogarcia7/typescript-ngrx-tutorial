import { Component, OnInit } from '@angular/core';
import { IntCounter, Actions } from '../int-counter.reducer';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-3nplus1',
  templateUrl: './3nplus1.component.html',
  styleUrls: ['./3nplus1.component.css']
})
export class _3nplus1Component implements OnInit {

  value$: Observable<IntCounter>;

  constructor(private store: Store<IntCounter>) {
    this.value$ = this.store.pipe(
      select('_3nplus1'),
      map(it => it.value))
  }

  ngOnInit() {
  }

  multiply() {
    this.store.dispatch(Actions.multiply())
  }

  divide() {
    this.store.dispatch(Actions.divide())
  }

  reset() {
    this.store.dispatch(Actions.reset())
  }

}