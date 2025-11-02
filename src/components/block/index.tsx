import { Pressable, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

const Block: FC<PressableProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <Pressable className={twMerge(className, 'px-5')} {...restProps}>
      {children}
    </Pressable>
  );
};

export { Block };
