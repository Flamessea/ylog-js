import {sumArr} from '../src/lib/array';

describe('ylog-js test', () => {
    it('sumArr([1, 2, 3]) -> should return 6', () => {
        const num = sumArr([1, 2, 3])
        expect(num).toBe(6)
    })
})