import { ReactNode } from 'react';

export interface IEmptyViewProps {
  icon?: ReactNode;
  primaryText: string;
  secondaryText?: string;
  footer?: ReactNode;
}
