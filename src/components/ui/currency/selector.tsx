import { Pressable } from 'react-native';

import { Block } from '@/components/ui/block';
import { Text } from '@/components/ui/text';
import type { ICurrencySelectorProps } from '@/types/components/ui/currency/selector';

const CurrencySelector: FC<ICurrencySelectorProps> = (props) => {
  const { currency } = props;
  const { id, name, code, symbol } = currency;

  return (
    <Pressable key={id} className="py-3">
      <Block>
        <Text className="text-lg">{code || symbol}</Text>
        <Text className="text-sm text-slate-400">{name}</Text>
      </Block>
    </Pressable>
  );
};

export { CurrencySelector };
