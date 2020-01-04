import { hello } from "../src/hello";

describe('hello', () => {
    it('return Hello friend', () => {
        expect(hello()).toEqual('Hello friend');
    });
});