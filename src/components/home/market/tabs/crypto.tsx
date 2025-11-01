import { cryptoCurrencies } from '@/constants/currencies';

import CurrencyList from '../currency-list';

const MarketTabCrypto: FC = () => {
  const sortedCrytoCurrencies = [...cryptoCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <CurrencyList currencies={sortedCrytoCurrencies} />;
};

export default MarketTabCrypto;
