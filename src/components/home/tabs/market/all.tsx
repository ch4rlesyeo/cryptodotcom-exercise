import { cryptoCurrencies, fiatCurrencies } from '@/data/currencies';

import CurrencyList from './currency-list';

const MarketTabAll: FC = () => {
  const allCurrencies = [...cryptoCurrencies, ...fiatCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <CurrencyList currencies={allCurrencies} />;
};

export default MarketTabAll;
