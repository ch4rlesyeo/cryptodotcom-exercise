import { ReactNode } from 'react';

import { ICurrency } from '@/types/data/currencies';

export interface ICurrencySelectorProps {
  currency: ICurrency;
  suffix?: ReactNode;
}
