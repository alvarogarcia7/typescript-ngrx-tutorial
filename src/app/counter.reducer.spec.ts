import {Counter} from './counter.reducer'
 
describe('Counter Reducer', () => { 
  it('should be initialized with value 0', () => {
    expect(new Counter().value).toEqual(0);
  });

  it('should be increased', () => {
  	const original = new Counter()

  	const result = original.increment()

    expect(result).toEqual(new Counter(1));
  });

  it('should be decreased', () => {
  	const original = new Counter()

  	const result = original.decrement()

    expect(result).toEqual(new Counter(-1));
  });

  it('should be immutable', () => {
  	const original = new Counter()

  	const result = original.increment()
    
    expect(result).not.toBe(original);
  });
});