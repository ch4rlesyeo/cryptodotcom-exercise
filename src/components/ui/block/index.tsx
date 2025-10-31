import { Pressable, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

const Block: FC<PressableProps> = (props) => {
  const { className, children } = props;

  return (
    <Pressable className={twMerge(className, 'px-5')}>{children}</Pressable>
  );
};

export { Block };
