import { dummy, dummyStatus } from "../index";

test("dummy should be okay", () => expect(dummy()).toEqual(dummyStatus));
