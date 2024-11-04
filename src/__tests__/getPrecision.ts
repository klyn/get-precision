import { getPrecision } from "../getPrecision";

test("getPrecision(x) should only accept numerical input", () => {
  // fail cases
  expect(getPrecision(undefined as any)).toEqual(undefined);
  expect(getPrecision(null as any)).toEqual(undefined);
  expect(getPrecision(true as any)).toEqual(undefined);
  expect(getPrecision("123" as any)).toEqual(undefined);
  expect(getPrecision([] as any)).toEqual(undefined);
  expect(getPrecision({} as any)).toEqual(undefined);
  expect(getPrecision((() => false) as any)).toEqual(undefined);
  // success cases
  expect(typeof getPrecision(123)).toBe("string");
  expect(typeof getPrecision(1.23)).toBe("string");
  expect(typeof getPrecision(1.23e7)).toBe("string");
  expect(typeof getPrecision(1.23e-7)).toBe("string");
  expect(typeof getPrecision(-12.123e-1)).toBe("string");
});

test("getPrecision(x) should return correct values", () => {
  expect(getPrecision(123)).toEqual("0");
  expect(getPrecision(1.23)).toEqual("0.23");
  expect(getPrecision(1.23e7)).toEqual("0");
  expect(getPrecision(1.23e-7)).toEqual("0.000000123");
  expect(getPrecision(123.456e-3)).toEqual("0.123456");
});
