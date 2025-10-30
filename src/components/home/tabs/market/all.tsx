import { ScrollView } from 'react-native';

import { CurrencySelector } from '@/components/ui/currency/selector';
import { cryptoCurrencies, fiatCurrencies } from '@/data/currencies';

const MarketTabAll: FC = () => {
  const allCurrencies = [...cryptoCurrencies, ...fiatCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {allCurrencies.map((currency) => {
        return <CurrencySelector key={currency.id} currency={currency} />;
      })}
    </ScrollView>
  );
};

export default MarketTabAll;
