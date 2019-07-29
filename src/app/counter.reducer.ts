import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './counter.actions';


export class Counter {

  value : number

  constructor(value: number = 0){
    this.value = value
  }

  increment(){
    return new Counter(this.value+1)
  }

  decrement(){
    return new Counter(this.value-1)
  }

  reset(){
    return new Counter()
  }
}

export const initialState = new Counter();

export const counterReducer = createReducer(initialState,
  (on(increment, state=> state.increment())),
  (on(decrement, state=>state.decrement())),
  (on(reset, state=>state.reset()))
);