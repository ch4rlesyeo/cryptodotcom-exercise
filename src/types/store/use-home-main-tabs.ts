export type THomeMainTabsKey = 'Favourites' | 'Market';

export interface IHomeMainTab {
  label: string;
  value: string;
  pageIndex: number;
}

export interface IHomeMainTabsState {
  pageIndex: number;
  setPageIndex: (nextPageIndex: number) => void;
}
