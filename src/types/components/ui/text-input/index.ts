import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export interface ITextInputProps extends TextInputProps {
  prefix?: ReactNode;
  onPressPanel?: () => void;
}
