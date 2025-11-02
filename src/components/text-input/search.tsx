import Ionicons from '@expo/vector-icons/Ionicons';

import { ITextInputProps, TextInput } from './index';

const SearchTextInput: FC<ITextInputProps> = (props) => {
  return (
    <TextInput
      {...props}
      prefix={
        <Ionicons name="search-outline" size={18} className="text-slate-400" />
      }
    />
  );
};

export { SearchTextInput };
