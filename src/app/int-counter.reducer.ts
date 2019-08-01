import { createAction, createReducer, on } from "@ngrx/store";
import { Step } from "./3nplus1/3nplus1.component";

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
  on(Actions.multiply, state => {
    const lastState = state[state.length - 1];
    let input = lastState.output
    let output = input * 3 + 1
    return [...state, new Step({ input, operation: "multiply", output, right: lastState.right })]
  }),
  on(Actions.divide, state => {
    const lastState = state[state.length - 1];
    let input = lastState.output
    let output = input / 2
    return [...state, new Step({ input, operation: "divide", output, right: lastState.right && input % 2 === 0 })]
  }),
  on(Actions.reset, _ => initialState())
)

function initialState(): Step[] {
  let initialValue = Math.ceil(Math.random() * 10)
  return [new Step({
    input: initialValue,
    operation: "set",
    output: initialValue,
    right: true
  })];
}

