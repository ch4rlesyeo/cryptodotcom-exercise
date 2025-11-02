import { DefaultTabOption } from './default';
import { SmallTabOption } from './small';

export type TTabOptionSize = 'small' | 'default';

export interface ITabOption {
  label: string;
  value: string;
}

export interface ITabOptionInternalProps extends ITabOption {
  size?: TTabOptionSize;
  selected?: boolean;
  onPress?: (nextValue: string) => void;
}

const TabOption: FC<ITabOptionInternalProps> = (props) => {
  const { size = 'default' } = props;

  switch (size) {
    case 'small':
      return <SmallTabOption {...props} />;
    default:
      return <DefaultTabOption {...props} />;
  }
};

export { TabOption };
