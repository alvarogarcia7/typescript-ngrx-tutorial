import { Component, OnInit } from '@angular/core';
import { IntCounter, Actions } from '../int-counter.reducer';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, takeLast, flatMap } from 'rxjs/internal/operators';


export class Step {
  input: number
  operation: string
  output: number
  right: boolean

  constructor(it: { input: number; operation: string; output: number; right: boolean; }) {
    this.input = it.input
    this.operation = it.operation
    this.output = it.output
    this.right = it.right
  }

  isCorrect(): boolean {
    return this.right;
  }
}

@Component({
  selector: 'app-3nplus1',
  templateUrl: './3nplus1.component.html',
  styleUrls: ['./3nplus1.component.css']
})
export class _3nplus1Component implements OnInit {

  value$: Observable<Step>;
  steps$: Observable<Step[]>;

  constructor(private store: Store<Step[]>) {


    this.steps$ = this.store.pipe(
      select('_3nplus1'))

    this.value$ = this.steps$.pipe(
      map(it => it[it.length - 1]))

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

  last() {
    return new Step({ right: true, input: 1, operation: "fake", output: 1 })
    // return this.steps$.pipe(takeLast(1));
  }

}