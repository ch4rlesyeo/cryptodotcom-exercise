import { cryptoCurrencies } from '@/constants/currencies';

import CurrencyList from '../fragments/currency-list';

const HomeMarketCategoryContentsCryptoView: FC = () => {
  const sortedCrytoCurrencies = [...cryptoCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <CurrencyList currencies={sortedCrytoCurrencies} />;
};

export default HomeMarketCategoryContentsCryptoView;
