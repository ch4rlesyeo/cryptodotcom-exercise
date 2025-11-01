import { ICurrency } from '@/types/data/currencies';

const trimAllWhitespaces = (value: string) => {
  return value.trim();
};

const matchesSpacePrefixed = (match: string, keyword: string) => {
  const pattern = new RegExp(`(?:^|\\s)${keyword}`, 'i');

  return pattern.test(match);
};

export const searchCurrencyWithKeyword = (
  keyword: string,
  currency: ICurrency
) => {
  const normalisedKeyword = trimAllWhitespaces(keyword.toLowerCase());
  const normalisedName = currency.name.toLowerCase();
  const normalisedSymbol = currency.symbol.toLocaleLowerCase();
  const normalisedCode = currency.code?.toLocaleLowerCase();

  if (normalisedKeyword === '') {
    return false;
  }

  if (
    [normalisedName, normalisedSymbol, normalisedCode].some((value) =>
      value?.startsWith(normalisedKeyword)
    )
  ) {
    return true;
  }

  if (matchesSpacePrefixed(normalisedName, normalisedKeyword)) {
    return true;
  }

  return false;
};
