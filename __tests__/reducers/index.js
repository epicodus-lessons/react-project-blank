import * as constants from "./../../src/constants";
import reducer from "./../../src/reducers"

describe("reducers", () => {

  test('temporary dummy test: two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('should return default state', () => {
    expect(reducer({}, { type: null })).toEqual({});
  });

});
