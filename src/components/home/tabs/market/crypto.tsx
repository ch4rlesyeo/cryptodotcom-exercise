import { ScrollView } from 'react-native';

import { CurrencySelector } from '@/components/ui/currency/selector';
import { cryptoCurrencies } from '@/data/currencies';

const MarketTabCrypto: FC = () => {
  const sortedCrytoCurrencies = [...cryptoCurrencies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {sortedCrytoCurrencies.map((currency) => {
        return <CurrencySelector key={currency.id} currency={currency} />;
      })}
    </ScrollView>
  );
};

export default MarketTabCrypto;
