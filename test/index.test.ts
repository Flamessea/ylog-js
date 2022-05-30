import {sumArr} from '../src/lib/array';
import {parseTime} from '../src/lib/date';

describe('ylog-js test', () => {
    it('sumArr([1, 2, 3]) -> should return 6', () => {
        const num = sumArr([1, 2, 3])
        expect(num).toBe(6)
    })
    it('parseTime(new Date()) -> should return 2022-05-30 13:07', () => {
        const string = parseTime(new Date())
        expect(string).toBe('2022-05-30 13:08')
    })
})