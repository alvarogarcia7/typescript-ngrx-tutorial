import { IntCounter as sut } from './int-counter.reducer'

describe('Int Reducer', () => {
  it('should be initialized with a mandatory value', () => {
    expect(new sut(1).value).toEqual(1);
  });

  it('should be set', () => {
    const original = new sut(1)

    const result = original.set(2)

    expect(result).toEqual(new sut(2));
  });

  it('should be immutable', () => {
    const original = new sut(2)

    const result = original.set(1)

    expect(result).not.toBe(original);
  });
});