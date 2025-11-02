import { cryptoCurrencies, fiatCurrencies } from '@/constants/currencies';

import CurrencyList from '../fragments/currency-list';

const HomeMarketCategoryContentsAllView: FC = () => {
  const allCurrencies = [...cryptoCurrencies, ...fiatCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <CurrencyList currencies={allCurrencies} />;
};

export default HomeMarketCategoryContentsAllView;
