import { ICurrency } from '@/models/currency';

import { searchCurrencyWithKeyword } from './currency';

describe('searchCurrencyWithKeyword', () => {
  const mockCurrency: ICurrency = {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    code: 'BTC',
  };

  describe('empty keyword', () => {
    it('should return false when keyword is empty string', () => {
      expect(searchCurrencyWithKeyword('', mockCurrency)).toBe(false);
    });

    it('should return false when keyword is only whitespace', () => {
      expect(searchCurrencyWithKeyword('   ', mockCurrency)).toBe(false);
    });
  });

  describe('exact matches at start', () => {
    it('should match when keyword matches start of name', () => {
      expect(searchCurrencyWithKeyword('Bit', mockCurrency)).toBe(true);
      expect(searchCurrencyWithKeyword('bit', mockCurrency)).toBe(true);
      expect(searchCurrencyWithKeyword('BIT', mockCurrency)).toBe(true);
    });

    it('should match when keyword matches start of symbol', () => {
      expect(searchCurrencyWithKeyword('BT', mockCurrency)).toBe(true);
      expect(searchCurrencyWithKeyword('bt', mockCurrency)).toBe(true);
    });

    it('should match when keyword matches start of code', () => {
      expect(searchCurrencyWithKeyword('BTC', mockCurrency)).toBe(true);
      expect(searchCurrencyWithKeyword('btc', mockCurrency)).toBe(true);
    });
  });

  describe('space-prefixed matches', () => {
    const multiWordCurrency: ICurrency = {
      id: '2',
      name: 'Ethereum Classic',
      symbol: 'ETC',
      code: 'ETC',
    };

    it('should match word after space in name', () => {
      expect(searchCurrencyWithKeyword('Classic', multiWordCurrency)).toBe(
        true
      );
      expect(searchCurrencyWithKeyword('classic', multiWordCurrency)).toBe(
        true
      );
    });

    it('should match at beginning of name', () => {
      expect(searchCurrencyWithKeyword('Eth', multiWordCurrency)).toBe(true);
    });
  });

  describe('no matches', () => {
    it('should return false when keyword does not match', () => {
      expect(searchCurrencyWithKeyword('Ethereum', mockCurrency)).toBe(false);
    });

    it('should return false for partial matches not at word boundaries', () => {
      expect(searchCurrencyWithKeyword('itcoin', mockCurrency)).toBe(false);
    });
  });

  describe('currency without code', () => {
    const currencyWithoutCode: ICurrency = {
      id: '3',
      name: 'Test Coin',
      symbol: 'TST',
    };

    it('should still work when code is undefined', () => {
      expect(searchCurrencyWithKeyword('Test', currencyWithoutCode)).toBe(true);
      expect(searchCurrencyWithKeyword('TST', currencyWithoutCode)).toBe(true);
      expect(searchCurrencyWithKeyword('XYZ', currencyWithoutCode)).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle keywords with leading/trailing whitespace', () => {
      expect(searchCurrencyWithKeyword('  Bit  ', mockCurrency)).toBe(true);
    });

    it('should handle special characters in currency name', () => {
      const specialCurrency: ICurrency = {
        id: '4',
        name: 'Coin-X',
        symbol: 'CX',
      };
      expect(searchCurrencyWithKeyword('Coin', specialCurrency)).toBe(true);
    });
  });
});
