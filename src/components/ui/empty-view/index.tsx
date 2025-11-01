import { clsx } from 'clsx';
import { View } from 'react-native';

import { Text } from '@/components/ui/text';
import { IEmptyViewProps } from '@/types/components/ui/empty-view';

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
