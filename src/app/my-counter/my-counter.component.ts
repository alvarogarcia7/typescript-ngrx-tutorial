import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {catchError, map, switchMap, tap} from "rxjs/internal/operators";
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { Counter } from '../counter.reducer';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<Counter>;
 
  constructor(private store: Store<{ count: Counter }>) {
    this.count$ = store.pipe(
      select('count'),
      map(i=>i.value)
      );
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}