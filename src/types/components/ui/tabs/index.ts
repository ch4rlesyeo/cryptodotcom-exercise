import type { ITabOption, TTabOptionSize } from './option';

export interface ITabsProps {
  size?: TTabOptionSize;
  value?: string;
  options: ITabOption[];
  onChangeTab?: (value: string, pageNo: number) => void;
}
