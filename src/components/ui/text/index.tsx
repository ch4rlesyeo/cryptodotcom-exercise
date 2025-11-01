import { clsx } from 'clsx';
import { Text as RNText, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

const Text: FC<TextProps> = (props) => {
  const { className, ...restProps } = props;

  const mergedClassName = twMerge(
    className?.includes('font-') ? className : clsx('font-regular', className)
  );

  return <RNText className={mergedClassName} {...restProps} />;
};

export { Text };
