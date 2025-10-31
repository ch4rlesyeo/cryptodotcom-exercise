import { Text as RNText, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

const Text: FC<TextProps> = (props) => {
  const { className } = props;

  return (
    <RNText className={twMerge(className, 'font-rubik-regular')} {...props} />
  );
};

export { Text };
