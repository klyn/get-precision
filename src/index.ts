export const dummyStatus: string = "okay";

export function dummy(): string {
  return dummyStatus;
}

console.log(`dummy is ${dummy()}`);
