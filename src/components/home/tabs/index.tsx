import { Block } from '@/components/ui/block';
import { Tabs } from '@/components/ui/tabs';
import { MAIN_TABS } from '@/stores/use-home-main-tabs';
import { ITabOption } from '@/types/components/ui/tabs/option';

import { useHomeMainTabsPagerView } from './use-home-main-tabs-pagerview';

const HomeMainTabs: FC = () => {
  const { homeMainTabsPageIndex, setHomeMainTabsPage } =
    useHomeMainTabsPagerView();

  const tabOptions: ITabOption[] = Object.values(MAIN_TABS).sort(
    (a, b) => a.pageIndex - b.pageIndex
  );

  const handleTabChange = (nexTabValue: string) => {
    setHomeMainTabsPage(Number(nexTabValue));
  };

  return (
    <Block className="mt-2 border-b border-slate-200">
      <Tabs
        value={homeMainTabsPageIndex.toString()}
        options={tabOptions}
        onChangeTab={handleTabChange}
      />
    </Block>
  );
};

export default HomeMainTabs;
