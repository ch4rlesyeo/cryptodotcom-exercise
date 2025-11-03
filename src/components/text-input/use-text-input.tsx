import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

export interface ITextInputProps extends TextInputProps {
  prefix?: ReactNode;
  autoFocusDelay?: number;
  onPressPanel?: () => void;
}

export const useTextInput = (props: ITextInputProps) => {
  const {
    editable = true,
    defaultValue,
    autoFocus,
    onChangeText,
    onPressPanel,
  } = props;

  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState(defaultValue);

  const textInputRef = useRef<RNTextInput>(null);

  const handlePanelPress = () => {
    if (onPressPanel) {
      onPressPanel();

      return;
    }

    if (editable) {
      textInputRef?.current?.focus();
    }
  };

  const handleInputTextChange = (nextValue: string) => {
    setInputValue(nextValue);
    onChangeText?.(nextValue);
  };

  const handleClearInputText = () => {
    setInputValue('');
    onChangeText?.('');
  };

  useFocusEffect(
    useCallback(() => {
      if (autoFocus) {
        const unsubscribeScreenTransition = navigation.addListener(
          'transitionEnd' as never,
          (e: { data?: { closing?: boolean } }) => {
            if (!e.data?.closing) {
              textInputRef.current?.focus();
            }
          }
        );

        return unsubscribeScreenTransition;
      }

      return () => {};
    }, [autoFocus, navigation])
  );

  return {
    inputValue,
    textInputRef,
    handlePanelPress,
    handleClearInputText,
    handleInputTextChange,
  };
};
