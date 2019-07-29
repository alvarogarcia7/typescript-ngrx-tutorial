import { createAction, createReducer, on } from "@ngrx/store";

export class IntCounter {

  value: number;

  constructor(value: number) {
    this.value = value
  }

  set(value: number): IntCounter {
    return new IntCounter(value)
  }
}

export const Actions = {
  multiply: createAction("[Int Counter] multiply"),
  divide: createAction("[Int Counter] divide"),
  reset: createAction("[Int Counter] reset"),
}

export const reducer = createReducer(
  initialState(),
  on(Actions.multiply, state => new IntCounter(state.value * 3 + 1)),
  on(Actions.divide, state => new IntCounter(state.value / 2)),
  on(Actions.reset, _ => initialState())
)

function initialState(): IntCounter {
  return new IntCounter(Math.ceil(Math.random() * 10));
}

