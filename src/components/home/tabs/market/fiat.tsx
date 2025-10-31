import { fiatCurrencies } from '@/data/currencies';

import CurrencyList from './currency-list';

const MarketTabFiat: FC = () => {
  const sortedFiatCurrencies = [...fiatCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <CurrencyList currencies={sortedFiatCurrencies} />;
};

export default MarketTabFiat;
