import { fireEvent, render } from '@testing-library/react-native';

import { ITabOption } from './option';

import { Tabs } from './index';

describe('Tabs Component', () => {
  const mockOptions: ITabOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Crypto', value: 'crypto' },
    { label: 'Fiat', value: 'fiat' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render all tab options', () => {
      const { getByText } = render(<Tabs options={mockOptions} value="all" />);

      expect(getByText('All')).toBeTruthy();
      expect(getByText('Crypto')).toBeTruthy();
      expect(getByText('Fiat')).toBeTruthy();
    });

    it('should render with default size when size is not specified', () => {
      const { getByText } = render(<Tabs options={mockOptions} value="all" />);

      expect(getByText('All')).toBeTruthy();
    });
  });

  describe('tab selection', () => {
    it('should mark the correct tab as selected based on value prop', () => {
      const { getByText } = render(
        <Tabs options={mockOptions} value="crypto" />
      );

      const cryptoTab = getByText('Crypto');
      expect(cryptoTab).toBeTruthy();
    });

    it('should handle no selection when value is undefined', () => {
      const { getByText } = render(<Tabs options={mockOptions} />);

      expect(getByText('All')).toBeTruthy();
      expect(getByText('Crypto')).toBeTruthy();
      expect(getByText('Fiat')).toBeTruthy();
    });

    it('should handle value that does not match any option', () => {
      const { getByText } = render(
        <Tabs options={mockOptions} value="nonexistent" />
      );

      expect(getByText('All').props.className).toBeTruthy();
      expect(getByText('Crypto')).toBeTruthy();
      expect(getByText('Fiat')).toBeTruthy();
    });
  });

  describe('tab interaction', () => {
    it('should call onChangeTab when a tab is pressed', () => {
      const mockOnChangeTab = jest.fn();
      const { getByText } = render(
        <Tabs options={mockOptions} value="all" onChangeTab={mockOnChangeTab} />
      );

      const cryptoTab = getByText('Crypto');
      fireEvent.press(cryptoTab);

      expect(mockOnChangeTab).toHaveBeenCalledWith('crypto');
      expect(mockOnChangeTab).toHaveBeenCalledTimes(1);
    });

    it('should call onChangeTab with correct value for each tab', () => {
      const mockOnChangeTab = jest.fn();
      const { getByText } = render(
        <Tabs options={mockOptions} value="all" onChangeTab={mockOnChangeTab} />
      );

      fireEvent.press(getByText('All'));
      expect(mockOnChangeTab).toHaveBeenCalledWith('all');

      fireEvent.press(getByText('Crypto'));
      expect(mockOnChangeTab).toHaveBeenCalledWith('crypto');

      fireEvent.press(getByText('Fiat'));
      expect(mockOnChangeTab).toHaveBeenCalledWith('fiat');

      expect(mockOnChangeTab).toHaveBeenCalledTimes(3);
    });
  });
});
