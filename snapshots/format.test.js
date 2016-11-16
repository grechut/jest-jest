import { formatCurrency } from './format';

describe('formatCurrency', () => {
    it('should properly format 1 dollar', () => {
        expect(formatCurrency(1)).toMatchSnapshot();
    });

    it('should properly format 1 million dollars', () => {
        expect(formatCurrency(1e6)).toMatchSnapshot();
    });

    it('should fail to format undefined', () => {
        expect(() => formatCurrency(undefined)).toThrowErrorMatchingSnapshot();
    });
})
