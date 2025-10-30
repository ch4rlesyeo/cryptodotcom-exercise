export type TTabOptionSize = 'small' | 'default';

export interface ITabOption {
  label: string;
  value: string;
  pageIndex: number;
}

export interface ITabOptionInternalProps extends ITabOption {
  size?: TTabOptionSize;
  selected?: boolean;
  onPress?: (nextValue: string, nextPageIndex: number) => void;
}
