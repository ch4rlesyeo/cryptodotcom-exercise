import type { ITabOptionInternalProps } from '@/types/components/ui/tabs/option';

import { DefaultTabOption } from './default';
import { SmallTabOption } from './small';

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
