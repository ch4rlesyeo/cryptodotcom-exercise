import { useEffect, useState } from 'react';

import { useFavouriteCurrenciesStore } from '@/stores/use-favourite-currencies';

export const useStorageHydration = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  const favouriteCurrenciesStorePersist = useFavouriteCurrenciesStore.persist;

  useEffect(() => {
    favouriteCurrenciesStorePersist.onFinishHydration(() => {
      setHasHydrated(true);
    });
  }, [favouriteCurrenciesStorePersist]);

  return {
    hasHydrated,
  };
};
