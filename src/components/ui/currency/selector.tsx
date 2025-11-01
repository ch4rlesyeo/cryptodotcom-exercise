import { clsx } from 'clsx';
import { Pressable } from 'react-native';

import { Block } from '@/components/ui/block';
import { Text } from '@/components/ui/text';
import { ICurrencySelectorProps } from '@/types/components/ui/currency/selector';

const CurrencySelector: FC<ICurrencySelectorProps> = (props) => {
  const { currency, suffix } = props;
  const { id, name, code, symbol } = currency;

  return (
    <Pressable
      key={id}
      className={clsx('flex-row items-center justify-between', 'py-3')}
    >
      <Block>
        <Text className="text-lg">{code || symbol}</Text>
        <Text className="text-sm text-slate-400">{name}</Text>
      </Block>
      <Block>{suffix}</Block>
    </Pressable>
  );
};

export { CurrencySelector };
