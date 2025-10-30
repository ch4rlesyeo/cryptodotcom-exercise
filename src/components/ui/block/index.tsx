import { Pressable, PressableProps } from 'react-native';

const Block: FC<PressableProps> = (props) => {
  const { className, children } = props;

  return <Pressable className={`${className} px-5`}>{children}</Pressable>;
};

export { Block };
