import { fireEvent, render } from '@testing-library/react-native';

import { ETabOptionTestID, TabOption } from './index';

describe('TabOption Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render label text', () => {
      const { getByTestId } = render(
        <TabOption label="Home" value="home" onPress={mockOnPress} />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.children).toContain('Home');
    });
  });

  describe('selected state', () => {
    it('should render unselected state by default', () => {
      const { getByTestId } = render(
        <TabOption label="Tab" value="tab" onPress={mockOnPress} />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-400');
    });

    it('should render selected state when selected is true', () => {
      const { getByTestId } = render(
        <TabOption
          label="Tab"
          value="tab"
          selected={true}
          onPress={mockOnPress}
        />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-800');
    });

    it('should render unselected state when selected is false', () => {
      const { getByTestId } = render(
        <TabOption
          label="Tab"
          value="tab"
          selected={false}
          onPress={mockOnPress}
        />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-400');
    });
  });

  describe('default size variant', () => {
    it('should have text-lg class for default size', () => {
      const { getByTestId } = render(
        <TabOption
          label="Home"
          value="home"
          size="default"
          onPress={mockOnPress}
        />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-lg');
    });

    it('should show border when selected in default size', () => {
      const { getByTestId } = render(
        <TabOption
          label="Home"
          value="home"
          size="default"
          selected={true}
          onPress={mockOnPress}
        />
      );

      const pressable = getByTestId(ETabOptionTestID.PRESSABLE);
      expect(pressable.props.className).toContain('border-');
    });

    it('should not show border when unselected in default size', () => {
      const { getByTestId } = render(
        <TabOption
          label="Home"
          value="home"
          size="default"
          selected={false}
          onPress={mockOnPress}
        />
      );

      const pressable = getByTestId(ETabOptionTestID.PRESSABLE);
      expect(pressable.props.className).toContain('border-transparent');
    });
  });

  describe('small size variant', () => {
    it('should not have text-lg class for small size', () => {
      const { getByTestId } = render(
        <TabOption label="All" value="all" size="small" onPress={mockOnPress} />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).not.toContain('text-lg');
    });

    it('should apply selected styles for small size', () => {
      const { getByTestId } = render(
        <TabOption
          label="All"
          value="all"
          size="small"
          selected={true}
          onPress={mockOnPress}
        />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-800');
    });

    it('should apply unselected styles for small size', () => {
      const { getByTestId } = render(
        <TabOption
          label="All"
          value="all"
          size="small"
          selected={false}
          onPress={mockOnPress}
        />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-400');
    });

    it('should not apply border styles for small size', () => {
      const { getByTestId } = render(
        <TabOption
          label="All"
          value="all"
          size="small"
          selected={false}
          onPress={mockOnPress}
        />
      );

      const pressable = getByTestId(ETabOptionTestID.PRESSABLE);
      expect(pressable.props.className).not.toContain('border-');
    });
  });

  describe('press handling', () => {
    it('should call onPress with value when pressed', () => {
      const { getByTestId } = render(
        <TabOption label="Home" value="home" onPress={mockOnPress} />
      );

      const pressable = getByTestId(ETabOptionTestID.PRESSABLE);

      fireEvent.press(pressable);

      expect(mockOnPress).toHaveBeenCalledWith('home');
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple presses', () => {
      const { getByTestId } = render(
        <TabOption label="Tab" value="tab" onPress={mockOnPress} />
      );

      const pressable = getByTestId(ETabOptionTestID.PRESSABLE);

      fireEvent.press(pressable);
      fireEvent.press(pressable);
      fireEvent.press(pressable);

      expect(mockOnPress).toHaveBeenCalledTimes(3);
      expect(mockOnPress).toHaveBeenCalledWith('tab');
    });

    it('should call onPress with correct value for different tabs', () => {
      const { getByTestId, rerender } = render(
        <TabOption label="Tab 1" value="tab1" onPress={mockOnPress} />
      );

      fireEvent.press(getByTestId(ETabOptionTestID.PRESSABLE));
      expect(mockOnPress).toHaveBeenCalledWith('tab1');

      rerender(<TabOption label="Tab 2" value="tab2" onPress={mockOnPress} />);

      fireEvent.press(getByTestId(ETabOptionTestID.PRESSABLE));
      expect(mockOnPress).toHaveBeenCalledWith('tab2');
    });
  });

  describe('state transitions', () => {
    it('should update styles when selected changes from false to true', () => {
      const { getByTestId, rerender } = render(
        <TabOption
          label="Tab"
          value="tab"
          selected={false}
          onPress={mockOnPress}
        />
      );

      let text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-400');

      rerender(
        <TabOption
          label="Tab"
          value="tab"
          selected={true}
          onPress={mockOnPress}
        />
      );

      text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-800');
    });

    it('should update styles when selected changes from true to false', () => {
      const { getByTestId, rerender } = render(
        <TabOption
          label="Tab"
          value="tab"
          selected={true}
          onPress={mockOnPress}
        />
      );

      let text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-800');

      rerender(
        <TabOption
          label="Tab"
          value="tab"
          selected={false}
          onPress={mockOnPress}
        />
      );

      text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.className).toContain('text-slate-400');
    });
  });

  describe('edge cases', () => {
    it('should handle numeric values as strings', () => {
      const { getByTestId } = render(
        <TabOption label="Tab 1" value="1" onPress={mockOnPress} />
      );

      fireEvent.press(getByTestId(ETabOptionTestID.PRESSABLE));
      expect(mockOnPress).toHaveBeenCalledWith('1');
    });

    it('should handle unicode characters in label', () => {
      const { getByTestId } = render(
        <TabOption label="Tab 🚀" value="emoji" onPress={mockOnPress} />
      );

      const text = getByTestId(ETabOptionTestID.TEXT);
      expect(text.props.children).toContain('Tab 🚀');
    });
  });
});
