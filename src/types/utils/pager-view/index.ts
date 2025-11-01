export interface IUsePagerViewEventsParams {
  currentPageIndex: number;
  onPageScroll: (nextPage: number) => void;
}
