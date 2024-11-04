import fromExponential from "from-exponential";

/**
 * Return value of the getPercision() function.
 */
type ReturnValue = string | undefined;

/**
 * Returns the value of whatever number that is after the
 * decimal point in a number, but in a string form.
 *
 * If the input is not a numerical value, it returns undefined.
 *
 * @example
 * // returns "0.23"
 * getPercision(1.23)
 *
 * @example
 * // returns "0"
 * getPercision(123)
 *
 * @param {number} x - Numerical input value
 * @returns {ReturnValue} - String or undefined.
 */
export function getPercision(x: number): ReturnValue {
  // - return undefined for anything that is not a number
  if (typeof x !== "number") {
    return undefined;
  }

  // - store the modulus remainder of x % 1
  const remainder = x % 1;

  // - handle whole numbers
  if (remainder === 0) {
    return "0";
  }

  // - if the remainder does not contain exponential notation,
  //   we may still have an issue to deal with. That is the dreaded
  //   'floating-point percision' issue. As an example, 1.23 % 1 results
  //   in '0.22999999999999998' instead of '0.23'. To fix this issue we
  //   need to:
  //
  // - a) get the length of x as a string. we will use this value
  //      to indicate how many digits to appear we want to appear
  //      after the floating-point in the remainder.
  //      we use the original length of the x because setting this
  //      value too high results in the same floating-point percision
  //      issues. For example:
  //      Number(1.23%1).toFixed(2); // "0.23"
  //      Number(1.23%1).toFixed(25); // "0.229999999999999982236431"6
  //
  // - b) get the toFixed() value of the remained
  // - c) parse the remainer as a 'number' again. This is because we
  //      are using a higher number than we neeed for toFixed() argument.
  //      this results in trailing 0s at the end of our strings:
  //      (1.23%1).toFixed(3) // "0.230"
  //      by parsing the value again as a number, the trailing 0 will be
  //      emitted.
  // - d) get string value of the new numerical value again and return it.

  if (remainder.toString().indexOf("e") === -1) {
    // a) note: x is still a number
    const xl = x.toString().length;
    // b) fixed-points for the remainder
    const remFixed = remainder.toFixed(xl);
    // c) & d)
    return Number(remFixed).toString();
  }

  // - if the remainder is in exponential form, then use another
  //   library to handle it properly and return the default string
  //   output.
  return fromExponential(remainder);
}
