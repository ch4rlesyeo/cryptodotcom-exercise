import { useEffect, useState } from 'react';

import { useFavouriteCurrenciesStore } from '@/features/home/views/overview-contents/views/favourites/store/use-favourite-currencies';

export const useStorageHydration = () => {
  const favouriteCurrenciesStorePersist = useFavouriteCurrenciesStore.persist;

  const [hasHydrated, setHasHydrated] = useState(
    favouriteCurrenciesStorePersist.hasHydrated()
  );

  useEffect(() => {
    const hydrationSubs = favouriteCurrenciesStorePersist.onFinishHydration(
      () => {
        setHasHydrated(true);
      }
    );

    return hydrationSubs;
  }, [favouriteCurrenciesStorePersist]);

  return {
    hasHydrated,
  };
};
