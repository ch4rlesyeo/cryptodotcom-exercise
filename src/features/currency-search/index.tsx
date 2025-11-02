import { useState } from 'react';
import { View } from 'react-native';

import { ScreenRootView } from '@/components/screen-root-view';

import CurrencySearchCurrencyList from './views/currency-list';
import CurrencySearchInput from './views/input';

export default function CurrencySearch() {
  const [keyword, setKeyword] = useState('');

  return (
    <ScreenRootView>
      <View className="flex-1">
        <CurrencySearchInput keyword={keyword} onKeywordChange={setKeyword} />
        <CurrencySearchCurrencyList keyword={keyword} />
      </View>
    </ScreenRootView>
  );
}
