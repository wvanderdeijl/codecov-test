import { a,d } from "./code";

test('a', () => {
    expect(a()).toEqual('a');
});
test('d', ()=>expect(d()).toEqual('d'));
