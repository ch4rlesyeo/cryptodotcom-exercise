import { Block } from '@/components/ui/block';
import { Tabs } from '@/components/ui/tabs';
import { MARKET_TABS } from '@/stores/use-home-market-tabs';
import { ITabOption } from '@/types/components/ui/tabs/option';

import { useHomeMarketTabsPagerView } from './use-home-market-tabs-pagerview';

const HomeMarketTabs: FC = () => {
  const { homeMarketTabsPageIndex, setHomeMarketTabsPage } =
    useHomeMarketTabsPagerView();

  const handleTabOptionChange = (nextValue: string) => {
    setHomeMarketTabsPage(Number(nextValue));
  };

  const tabOptions: ITabOption[] = Object.values(MARKET_TABS).sort(
    (a, b) => a.pageIndex - b.pageIndex
  );

  return (
    <Block className="my-2">
      <Tabs
        size="small"
        value={homeMarketTabsPageIndex.toString()}
        options={tabOptions}
        onChangeTab={handleTabOptionChange}
      />
    </Block>
  );
};

export default HomeMarketTabs;
