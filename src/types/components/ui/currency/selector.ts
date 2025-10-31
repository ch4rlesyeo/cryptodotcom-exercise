import type { ReactNode } from 'react';

import type { ICurrency } from '@/types/data/currencies';

export interface ICurrencySelectorProps {
  currency: ICurrency;
  prefix?: ReactNode;
}
