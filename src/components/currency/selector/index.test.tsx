import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { ICurrency } from '@/models/currency';

import { CurrencySelector, ECurrencySelectorTestID } from './index';

describe('CurrencySelector', () => {
  it('should render symbol and name correctly', () => {
    const mockCurrency: ICurrency = {
      id: 'ETH',
      name: 'Ethereum',
      symbol: 'ETH',
    };

    const { getByTestId } = render(
      <CurrencySelector currency={mockCurrency} />
    );

    const primaryText = getByTestId(ECurrencySelectorTestID.PRIMARY_TEXT);
    const secondaryText = getByTestId(ECurrencySelectorTestID.SECONDARY_TEXT);

    expect(primaryText.props.children).toBe(mockCurrency.symbol);
    expect(secondaryText.props.children).toBe(mockCurrency.name);
  });

  const mockCurrencyWithCode: ICurrency = {
    id: 'HKD',
    name: 'Hong Kong Dollar',
    symbol: '$',
    code: 'HKD',
  };

  it('should render code when code is provided', () => {
    const { getByTestId } = render(
      <CurrencySelector currency={mockCurrencyWithCode} />
    );
    const primaryText = getByTestId(ECurrencySelectorTestID.PRIMARY_TEXT);
    const secondaryText = getByTestId(ECurrencySelectorTestID.SECONDARY_TEXT);

    expect(primaryText.props.children).toBe(mockCurrencyWithCode.code);
    expect(secondaryText.props.children).toBe(mockCurrencyWithCode.name);
  });

  it('should render suffix when provided', () => {
    const suffixText = 'Favourites';
    const suffixTextID = 'SUFFIX_TEST';

    const { getByTestId } = render(
      <CurrencySelector
        currency={mockCurrencyWithCode}
        suffix={<Text testID={suffixTextID}>{suffixText}</Text>}
      />
    );
    expect(getByTestId(suffixTextID).props.children).toBe(suffixText);
  });

  describe('Edge cases', () => {
    it('should fallback to symbol when currency name is empty', () => {
      const currencyWithoutNameButSymbol: ICurrency = {
        id: 'DOGE',
        name: '',
        symbol: 'DOGE',
      };

      const { getByTestId } = render(
        <CurrencySelector currency={currencyWithoutNameButSymbol} />
      );
      expect(
        getByTestId(ECurrencySelectorTestID.SECONDARY_TEXT).props.children
      ).toBe(currencyWithoutNameButSymbol.symbol);
    });

    it('should fallback to code when currency name and symbol is empty', () => {
      const currencyWithoutNameAndSymbolButCode: ICurrency = {
        id: 'DOGE',
        name: '',
        symbol: '',
        code: 'DOGE',
      };

      const { getByTestId } = render(
        <CurrencySelector currency={currencyWithoutNameAndSymbolButCode} />
      );
      expect(
        getByTestId(ECurrencySelectorTestID.SECONDARY_TEXT).props.children
      ).toBe(currencyWithoutNameAndSymbolButCode.code);
    });

    it('should handle complex suffix components', () => {
      const ComplexSuffix = () => (
        <>
          <Text>Star</Text>
          <Text>Icon</Text>
        </>
      );

      const { getByText } = render(
        <CurrencySelector
          currency={mockCurrencyWithCode}
          suffix={<ComplexSuffix />}
        />
      );
      expect(getByText('Star')).toBeTruthy();
      expect(getByText('Icon')).toBeTruthy();
    });
  });
});
