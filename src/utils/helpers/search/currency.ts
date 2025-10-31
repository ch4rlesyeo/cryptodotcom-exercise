import type { ICurrency } from '@/types/data/currencies';

export const searchCurrencyWithKeyword = (
  keyword: string,
  currency: ICurrency
) => {
  const loweredCaseKeyword = keyword.toLowerCase();
  const loweredCaseName = currency.name.toLowerCase();

  if (loweredCaseName.startsWith(loweredCaseKeyword)) {
    return true;
  }

  if (currency.symbol.toLowerCase().startsWith(loweredCaseKeyword)) {
    return true;
  }

  if (
    loweredCaseKeyword.startsWith(' ') &&
    loweredCaseName.includes(loweredCaseKeyword)
  ) {
    return true;
  }

  return false;
};
