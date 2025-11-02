import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { View } from 'react-native';

import { Text } from '@/components/text';

export interface IEmptyViewProps {
  icon?: ReactNode;
  primaryText: string;
  secondaryText?: string;
  footer?: ReactNode;
}

const EmptyView: FC<IEmptyViewProps> = (props) => {
  const { icon, primaryText, secondaryText, footer } = props;

  return (
    <View className={clsx('h-1/2', 'items-center justify-center')}>
      {icon && <View className="pb-3">{icon}</View>}
      <Text className={clsx('py-1', 'px-14', 'text-slate-400')}>
        {primaryText}
      </Text>
      <Text className={clsx('py-1', 'px-14', 'text-center', 'text-slate-400')}>
        {secondaryText}
      </Text>
      {footer}
    </View>
  );
};

export { EmptyView };
