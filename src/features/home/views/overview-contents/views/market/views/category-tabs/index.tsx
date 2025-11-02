import { Block } from '@/components/block';
import { Tabs } from '@/components/tabs';
import { ITabOption } from '@/components/tabs/option';

import { useHomeMarketCategoryTabs } from './hooks/use-category-tabs';
import { HOME_MARKET_CATEGORY_TABS } from './store/category-tabs';

const HomeMarketCategoryTabs: FC = () => {
  const { pageIndex, setPage } = useHomeMarketCategoryTabs();

  const handleTabChange = (nextValue: string) => {
    setPage(Number(nextValue));
  };

  const tabOptions: ITabOption[] = Object.values(
    HOME_MARKET_CATEGORY_TABS
  ).sort((a, b) => a.pageIndex - b.pageIndex);

  return (
    <Block className="my-2">
      <Tabs
        size="small"
        value={pageIndex.toString()}
        options={tabOptions}
        onChangeTab={handleTabChange}
      />
    </Block>
  );
};

export default HomeMarketCategoryTabs;
