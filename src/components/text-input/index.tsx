import Ionicons from '@expo/vector-icons/Ionicons';
import { clsx } from 'clsx';
import {
  Platform,
  Pressable,
  TextInput as RNTextInput,
  View,
} from 'react-native';

import { ITextInputProps, useTextInput } from './use-text-input';

export enum ETextInputTestID {
  INPUT = 'input',
  INPUT_PANEL = 'input-panel',
  CLEAR_ICON = 'clear-icon',
  CLEAR_ICON_PRESSABLE = 'clear-icon-pressable',
}

const TextInput: FC<ITextInputProps> = (props) => {
  const { prefix, editable = true, ...restProps } = props;

  const {
    inputValue,
    textInputRef,
    handlePanelPress,
    handleInputTextChange,
    handleClearInputText,
  } = useTextInput(props);

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
      testID={ETextInputTestID.INPUT_PANEL}
      className={clsx('flex-1 flex-row', 'px-4', 'bg-gray-200', 'rounded-md')}
    >
      {prefix && <View className="justify-center pr-2">{prefix}</View>}
      <RNTextInput
        {...restProps}
        ref={textInputRef}
        testID={ETextInputTestID.INPUT}
        value={inputValue}
        editable={editable}
        autoFocus={false}
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
          testID={ETextInputTestID.CLEAR_ICON_PRESSABLE}
          className="justify-center pl-2"
          onPress={handleClearInputText}
        >
          <Ionicons
            testID={ETextInputTestID.CLEAR_ICON}
            name="close"
            size={20}
            className="text-slate-400"
          />
        </Pressable>
      )}
    </Pressable>
  );
};

export { TextInput };
