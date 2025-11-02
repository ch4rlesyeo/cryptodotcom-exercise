import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';

import { Block } from '@/components/block';
import { Text } from '@/components/text';
import { ICurrency } from '@/models/currency';

export interface ICurrencySelectorProps {
  currency: ICurrency;
  suffix?: ReactNode;
}

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
