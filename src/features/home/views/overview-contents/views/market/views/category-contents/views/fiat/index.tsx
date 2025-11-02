import { fiatCurrencies } from '@/constants/currencies';

import CurrencyList from '../fragments/currency-list';

const HomeMarketCategoryContentsFiatView: FC = () => {
  const sortedFiatCurrencies = [...fiatCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <CurrencyList currencies={sortedFiatCurrencies} />;
};

export default HomeMarketCategoryContentsFiatView;
