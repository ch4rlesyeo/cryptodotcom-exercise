import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { EmptyView } from '@/components/empty-view';

const CurrencySearchEmptyList: FC = () => {
  return (
    <EmptyView
      primaryText="No records were found"
      secondaryText={`Try "Doge" maybe`}
      icon={
        <MaterialCommunityIcons
          name="file-search-outline"
          size={40}
          className="text-slate-400"
        />
      }
    />
  );
};

export default CurrencySearchEmptyList;
