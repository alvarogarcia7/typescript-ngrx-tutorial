export class IntCounter {

  value: number;

  constructor(value: number) {
    this.value = value
  }

  set(value: number): IntCounter {
    return new IntCounter(value)
  }
}