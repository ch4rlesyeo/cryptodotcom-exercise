import Ionicons from '@expo/vector-icons/Ionicons';
import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Pressable, TextInput as RNTextInput, View } from 'react-native';

import type { ITextInputProps } from '@/types/components/ui/text-input';

const TextInput: FC<ITextInputProps> = (props) => {
  const {
    prefix,
    editable = true,
    defaultValue,
    autoFocus,
    onChangeText,
    onPressPanel,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState(defaultValue);

  const textInputRef = useRef<RNTextInput>(null);

  const handlePanelPress = () => {
    if (editable) {
      textInputRef?.current?.focus();
    }

    onPressPanel?.();
  };

  const handleInputTextChange = (nextValue: string) => {
    setInputValue(nextValue);
    onChangeText?.(nextValue);
  };

  const handleClearInputText = () => {
    setInputValue('');
    onChangeText?.('');
  };

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        textInputRef.current?.focus();
      }, 500);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [autoFocus]);

  return (
    <Pressable
      onPress={handlePanelPress}
      className={clsx('flex-1 flex-row', 'px-4', 'bg-gray-200', 'rounded-md')}
    >
      {prefix && <View className="justify-center pr-2">{prefix}</View>}
      <RNTextInput
        {...restProps}
        ref={textInputRef}
        value={inputValue}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="none"
        pointerEvents={editable ? 'auto' : 'none'}
        onChangeText={handleInputTextChange}
        className={clsx(
          'h-10 flex-1',
          'font-rubik-regular text-base/[17px]',
          'placeholder:text-slate-400'
        )}
      />
      {inputValue && inputValue !== '' && (
        <Pressable
          className="justify-center pl-2"
          onPress={handleClearInputText}
        >
          <Ionicons name="close" size={20} className="text-slate-400" />
        </Pressable>
      )}
    </Pressable>
  );
};

export { TextInput };
