import { Text as RNText, TextProps } from 'react-native';

const Text: FC<TextProps> = (props) => {
  const { className } = props;

  return <RNText className={`font-rubik-regular ${className}`} {...props} />;
};

export { Text };
