import { formatCurrency } from './format';

describe('formatCurrency', () => {
    it('should properly format 1 million dollars', () => {
        // expect(formatCurrency(1e6)).toBe('$1000000.00');
        expect(formatCurrency(1e6)).toMatchSnapshot();
    });
})
