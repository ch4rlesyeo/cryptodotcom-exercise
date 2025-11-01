export type THomeMarketTabsKey = 'All' | 'Crypto' | 'Fiat';

export interface IHomeMarketTab {
  label: string;
  value: string;
  pageIndex: number;
}

export interface IHomeMarketTabsState {
  pageIndex: number;
  setPageIndex: (nextPageIndex: number) => void;
}
