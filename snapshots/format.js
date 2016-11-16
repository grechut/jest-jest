export function formatCurrency(currency) {
    if (currency == null) { 
        throw new Error('Wrong value');
    }

    if (currency >= 1e6) {
        return `$${(currency / 1e6).toFixed(0)}m`
    }
    return `$${currency.toFixed(2)}`;
}
