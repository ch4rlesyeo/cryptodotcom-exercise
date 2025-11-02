import { Block } from '@/components/block';
import { Tabs } from '@/components/tabs';
import { ITabOption } from '@/components/tabs/option';

import { useHomeOverviewTabs } from './hooks/user-overview-tabs';
import { HOME_OVERVIEW_TABS } from './stores/overview-tabs';

const HomeOverviewTabsView: FC = () => {
  const { pageIndex, setPage } = useHomeOverviewTabs();

  const tabOptions: ITabOption[] = Object.values(HOME_OVERVIEW_TABS).sort(
    (a, b) => a.pageIndex - b.pageIndex
  );

  const handleTabChange = (nexTabValue: string) => {
    setPage(Number(nexTabValue));
  };

  return (
    <Block className="mt-2 border-b border-slate-200">
      <Tabs
        value={pageIndex.toString()}
        options={tabOptions}
        onChangeTab={handleTabChange}
      />
    </Block>
  );
};

export default HomeOverviewTabsView;
