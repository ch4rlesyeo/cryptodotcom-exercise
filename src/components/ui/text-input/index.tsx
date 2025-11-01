import Ionicons from '@expo/vector-icons/Ionicons';
import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';
import {
  Platform,
  Pressable,
  TextInput as RNTextInput,
  View,
} from 'react-native';

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

  const textInputClassName =
    Platform.OS === 'ios'
      ? clsx(
          'h-10 flex-1',
          'font-regular text-base/[18px]',
          'placeholder:text-slate-400'
        )
      : clsx('flex-1 py-2', 'font-regular', 'placeholder:text-slate-400');

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
        editable={editable}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="none"
        pointerEvents={editable ? 'auto' : 'none'}
        textAlignVertical="center"
        onChangeText={handleInputTextChange}
        className={textInputClassName}
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
