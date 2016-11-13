import { formatCurrency } from './format';

describe('formatCurrency', () => {
    it('should properly format 1 dollar', () => {
        expect(formatCurrency(1)).toMatchSnapshot();
    });

    it('should properly format 2 dollars', () => {
        expect(formatCurrency(2)).toMatchSnapshot();
    });
})
