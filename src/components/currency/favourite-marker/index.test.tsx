import { fireEvent, render } from '@testing-library/react-native';

import { CurrencyFavouriteMarker, ECurrencyFavouriteMarker } from './index';

describe('CurrencyFavouriteMarker', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Icon rendering', () => {
    it('should render pin-off-outline icon when isFavourite is true', () => {
      const { getByTestId } = render(
        <CurrencyFavouriteMarker isFavourite={true} onPress={mockOnPress} />
      );

      const icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-off-outline');
    });

    it('should render pin-outline icon when isFavourite is false', () => {
      const { getByTestId } = render(
        <CurrencyFavouriteMarker isFavourite={false} onPress={mockOnPress} />
      );

      const icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-outline');
    });

    it('should render pin-outline icon when isFavourite is undefined', () => {
      const { getByTestId } = render(
        <CurrencyFavouriteMarker onPress={mockOnPress} />
      );

      const icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-outline');
    });
  });

  describe('Press handling', () => {
    it('should call onPress when pressed', () => {
      const { root } = render(
        <CurrencyFavouriteMarker isFavourite={false} onPress={mockOnPress} />
      );

      const pressable = root.findByProps({ accessible: true });
      fireEvent.press(pressable);

      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should call onPress multiple times on multiple presses', () => {
      const { root } = render(
        <CurrencyFavouriteMarker isFavourite={false} onPress={mockOnPress} />
      );

      const pressable = root.findByProps({ accessible: true });
      fireEvent.press(pressable);
      fireEvent.press(pressable);
      fireEvent.press(pressable);

      expect(mockOnPress).toHaveBeenCalledTimes(3);
    });
  });

  describe('Override className styling', () => {
    it('should apply text-slate-400 icon color by default', () => {
      const { getByTestId } = render(
        <CurrencyFavouriteMarker isFavourite={false} onPress={mockOnPress} />
      );

      const icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.className).toContain('text-slate-400');
    });

    it('should override icon color to text-blue-500', () => {
      const { getByTestId } = render(
        <CurrencyFavouriteMarker
          isFavourite={false}
          onPress={mockOnPress}
          className="text-blue-500"
        />
      );

      const icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.className).toContain('text-blue-500');
    });

    it('should handle empty className', () => {
      const { getByTestId } = render(
        <CurrencyFavouriteMarker
          isFavourite={false}
          onPress={mockOnPress}
          className=""
        />
      );

      const icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.className).toContain('text-slate-400');
    });
  });

  describe('state transitions', () => {
    it('should handle toggling from unfavourite to favourite', () => {
      const { getByTestId, rerender } = render(
        <CurrencyFavouriteMarker isFavourite={false} onPress={mockOnPress} />
      );

      let icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-outline');

      rerender(
        <CurrencyFavouriteMarker isFavourite={true} onPress={mockOnPress} />
      );

      icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-off-outline');
    });

    it('should handle toggling from favourite to unfavourite', () => {
      const { getByTestId, rerender } = render(
        <CurrencyFavouriteMarker isFavourite={true} onPress={mockOnPress} />
      );

      let icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-off-outline');

      rerender(
        <CurrencyFavouriteMarker isFavourite={false} onPress={mockOnPress} />
      );

      icon = getByTestId(ECurrencyFavouriteMarker.ICON);
      expect(icon.props.name).toBe('pin-outline');
    });
  });
});
