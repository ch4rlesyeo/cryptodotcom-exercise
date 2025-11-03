/* eslint-env jest */
/* eslint-disable @typescript-eslint/no-require-imports */

// Mock expo modules that might cause issues in tests
jest.mock('expo-font');
jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn(),
  preventAutoHideAsync: jest.fn(),
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock react-native-pager-view
jest.mock('react-native-pager-view', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(({ children }) => children),
  };
});

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => {
  const mockReact = require('react');
  return {
    __esModule: true,
    default: mockReact.forwardRef((props, ref) =>
      mockReact.createElement('Icon', { ...props, ref })
    ),
  };
});

jest.mock('@expo/vector-icons/Ionicons', () => {
  const mockReact = require('react');
  return {
    __esModule: true,
    default: mockReact.forwardRef((props, ref) =>
      mockReact.createElement('Icon', { ...props, ref })
    ),
  };
});

jest.mock('@expo/vector-icons/Feather', () => {
  const mockReact = require('react');
  return {
    __esModule: true,
    default: mockReact.forwardRef((props, ref) =>
      mockReact.createElement('Icon', { ...props, ref })
    ),
  };
});
