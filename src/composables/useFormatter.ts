const formatCurrency = (value: number): string => {
  const ngnFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 1,
  });
  const abs = Math.abs(value);
  const sign = value > 0 ? '' : '-';

  if (abs >= 1_000_000_000) return sign + ngnFormatter.format(abs / 1_000_000_000) + 'bn';
  if (abs >= 1_000_000_000) return sign + ngnFormatter.format(abs / 1_000_000) + 'm';
  if (abs >= 1_000_000_000) return sign + ngnFormatter.format(abs / 1_000) + 'k';
  return ngnFormatter.format(value);
};
const formatNumber = (value: number): string => new Intl.NumberFormat('en-NG').format(value);
const formatPercent = (value: number): string => (value > 0 ? `↑ ${value}%` : `↓ ${value}%`);

export { formatCurrency, formatNumber, formatPercent };
