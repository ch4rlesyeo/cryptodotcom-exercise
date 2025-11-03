import { fireEvent, render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { ETextInputTestID, TextInput } from './index';

// Mock React Navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    addListener: jest.fn(() => jest.fn()),
  }),
  useFocusEffect: jest.fn((callback) => callback()),
}));

describe('TextInput Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render text input placeholder', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      expect(getByTestId(ETextInputTestID.INPUT)).toBeTruthy();
    });

    it('should render with default value', () => {
      const { getByDisplayValue } = render(
        <TextInput defaultValue="Bitcoin" placeholder="Search" />
      );
      expect(getByDisplayValue('Bitcoin')).toBeTruthy();
    });

    it('should render prefix when provided', () => {
      const PrefixIcon = () => <Text>🔍</Text>;
      const { getByText } = render(
        <TextInput placeholder="Search" prefix={<PrefixIcon />} />
      );
      expect(getByText('🔍')).toBeTruthy();
    });

    it('should not render prefix when not provided', () => {
      const { queryByText } = render(<TextInput placeholder="Search" />);
      expect(queryByText('🔍')).toBeNull();
    });

    it('should render clear button when input has value', () => {
      const { queryByTestId } = render(<TextInput defaultValue="test" />);
      const clearIcon = queryByTestId(ETextInputTestID.CLEAR_ICON);
      expect(clearIcon).toBeTruthy();
    });

    it('should not render clear button when input is empty', () => {
      const { queryByTestId } = render(<TextInput defaultValue="" />);
      const clearIcon = queryByTestId(ETextInputTestID.CLEAR_ICON);
      expect(clearIcon).toBeNull();
    });
  });

  describe('text input behavior', () => {
    it('should update value when text is typed', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);

      fireEvent.changeText(input, 'Bitcoin');

      expect(input.props.value).toBe('Bitcoin');
    });

    it('should call onChangeText callback when text changes', () => {
      const mockOnChangeText = jest.fn();
      const { getByTestId } = render(
        <TextInput placeholder="Search" onChangeText={mockOnChangeText} />
      );
      const input = getByTestId(ETextInputTestID.INPUT);

      fireEvent.changeText(input, 'Ethereum');

      expect(mockOnChangeText).toHaveBeenCalledWith('Ethereum');
      expect(mockOnChangeText).toHaveBeenCalledTimes(1);
    });

    it('should support multiple text changes', () => {
      const mockOnChangeText = jest.fn();
      const { getByTestId } = render(
        <TextInput placeholder="Search" onChangeText={mockOnChangeText} />
      );
      const input = getByTestId(ETextInputTestID.INPUT);

      fireEvent.changeText(input, 'B');
      expect(input.props.value).toBe('B');

      fireEvent.changeText(input, 'Bi');
      expect(input.props.value).toBe('Bi');

      fireEvent.changeText(input, 'Bit');
      expect(input.props.value).toBe('Bit');
    });
  });

  describe('clear button behavior', () => {
    it('should clear input when clear icon button is pressed', () => {
      const mockOnChangeText = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <TextInput
          defaultValue="test"
          placeholder="Search"
          onChangeText={mockOnChangeText}
        />
      );
      const input = getByTestId(ETextInputTestID.INPUT);

      // Type to trigger clear button appearance
      fireEvent.changeText(input, 'test text');
      expect(input.props.value).toBe('test text');

      const clearIcon = getByTestId(ETextInputTestID.CLEAR_ICON);

      fireEvent.press(clearIcon);
      expect(input.props.value).toBe('');
      expect(mockOnChangeText).toHaveBeenCalledWith('');

      const clearIconAfterClearText = queryByTestId(
        ETextInputTestID.CLEAR_ICON
      );
      expect(clearIconAfterClearText).toBeNull();
    });
  });

  describe('panel press behavior', () => {
    it('should call onPanelPress when panel is pressed', () => {
      const mockOnPressPanel = jest.fn();
      const { getByTestId } = render(
        <TextInput placeholder="Search" onPressPanel={mockOnPressPanel} />
      );

      // Get the input and trigger focus which simulates panel press
      const inputPanel = getByTestId(ETextInputTestID.INPUT_PANEL);
      fireEvent(inputPanel, 'press');

      expect(mockOnPressPanel).toHaveBeenCalled();
    });

    it('should not focus when onPanelPress is provide when panel is pressed', () => {
      const mockOnPressPanel = jest.fn();
      const mockOnFocus = jest.fn();

      const { getByTestId } = render(
        <TextInput
          placeholder="Search"
          onPressPanel={mockOnPressPanel}
          onFocus={mockOnFocus}
        />
      );

      // Get the input and trigger focus which simulates panel press
      const inputPanel = getByTestId(ETextInputTestID.INPUT_PANEL);
      fireEvent(inputPanel, 'press');

      expect(mockOnPressPanel).toHaveBeenCalled();
      expect(mockOnFocus).not.toHaveBeenCalled();
    });
  });

  describe('editable prop', () => {
    it('should be editable by default', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.editable).toBe(true);

      fireEvent.changeText(input, 'test text');
      expect(input.props.value).toBe('test text');
    });

    it('should prevent focus and edit when editable=false', () => {
      const mockOnFocus = jest.fn();

      const { getByTestId } = render(
        <TextInput
          placeholder="Search"
          editable={false}
          onFocus={mockOnFocus}
        />
      );
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.editable).toBe(false);
      expect(input.props.pointerEvents).toBe('none');

      fireEvent(input, 'focus');
      expect(mockOnFocus).not.toHaveBeenCalled();

      fireEvent.changeText(input, 'test text');
      expect(input.props.value).toBeUndefined();
    });
  });

  describe('input properties', () => {
    it('should have autoFocus disabled', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.autoFocus).toBe(false);
    });

    it('should have spellCheck disabled', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.spellCheck).toBe(false);
    });

    it('should have autoCorrect disabled', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.autoCorrect).toBe(false);
    });

    it('should have autoCapitalize set to none', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.autoCapitalize).toBe('none');
    });

    it('should have textAlignVertical set to center', () => {
      const { getByTestId } = render(<TextInput placeholder="Search" />);
      const input = getByTestId(ETextInputTestID.INPUT);
      expect(input.props.textAlignVertical).toBe('center');
    });
  });

  describe('edge cases', () => {
    it('should handle empty string as defaultValue', () => {
      const { getByPlaceholderText } = render(
        <TextInput defaultValue="" placeholder="Search" />
      );
      const input = getByPlaceholderText('Search');
      expect(input.props.value).toBe('');
    });

    it('should handle complex prefix components', () => {
      const ComplexPrefix = () => (
        <View>
          <Text>Icon</Text>
          <Text>Label</Text>
        </View>
      );

      const { getByText } = render(
        <TextInput placeholder="Search" prefix={<ComplexPrefix />} />
      );

      expect(getByText('Icon')).toBeTruthy();
      expect(getByText('Label')).toBeTruthy();
    });
  });
});
