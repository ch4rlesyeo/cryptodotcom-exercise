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

export enum ECurrencySelectorTestID {
  PRIMARY_TEXT = 'code-or-symbol',
  SECONDARY_TEXT = 'name-only',
}

const CurrencySelector: FC<ICurrencySelectorProps> = (props) => {
  const { currency, suffix } = props;
  const { name, code, symbol } = currency;

  return (
    <Pressable
      className={clsx('flex-row items-center justify-between', 'py-3')}
    >
      <Block>
        <Text testID={ECurrencySelectorTestID.PRIMARY_TEXT} className="text-lg">
          {code || symbol}
        </Text>
        <Text
          testID={ECurrencySelectorTestID.SECONDARY_TEXT}
          className="text-sm text-slate-400"
        >
          {name || code || symbol}
        </Text>
      </Block>
      <Block>{suffix}</Block>
    </Pressable>
  );
};

export { CurrencySelector };
