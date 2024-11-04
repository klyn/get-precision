import { getPercision } from "../getPercision";

test("getPercision(x) should only accept numerical input", () => {
  // fail cases
  expect(getPercision(undefined as any)).toEqual(undefined);
  expect(getPercision(null as any)).toEqual(undefined);
  expect(getPercision(true as any)).toEqual(undefined);
  expect(getPercision("123" as any)).toEqual(undefined);
  expect(getPercision([] as any)).toEqual(undefined);
  expect(getPercision({} as any)).toEqual(undefined);
  expect(getPercision((() => false) as any)).toEqual(undefined);
  // success cases
  expect(typeof getPercision(123)).toBe("string");
  expect(typeof getPercision(1.23)).toBe("string");
  expect(typeof getPercision(1.23e7)).toBe("string");
  expect(typeof getPercision(1.23e-7)).toBe("string");
  expect(typeof getPercision(-12.123e-1)).toBe("string");
});

test("getPercision(x) should return correct values", () => {
  expect(getPercision(123)).toEqual("0");
  expect(getPercision(1.23)).toEqual("0.23");
  expect(getPercision(1.23e7)).toEqual("0");
  expect(getPercision(1.23e-7)).toEqual("0.000000123");
  expect(getPercision(123.456e-3)).toEqual("0.123456");
});
