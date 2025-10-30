import { ScrollView } from 'react-native';

import { CurrencySelector } from '@/components/ui/currency/selector';
import { fiatCurrencies } from '@/data/currencies';

const MarketTabFiat: FC = () => {
  const sortedFiatCurrencies = [...fiatCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {sortedFiatCurrencies.map((currency) => {
        return <CurrencySelector key={currency.id} currency={currency} />;
      })}
    </ScrollView>
  );
};

export default MarketTabFiat;
