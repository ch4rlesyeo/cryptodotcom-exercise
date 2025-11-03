# Crypto.com Exercise

A React Native mobile application built with Expo showcasing cryptocurrency data with search, favorites, and market features.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher ([Download](https://nodejs.org/))
- **npm**: Version 8 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))
- **Expo Go App**: For testing on physical devices
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## Running the App

### Development Mode

Start the Expo development server:

```bash
npm start
# or
npm run start
```

This will open the Expo Developer Tools in your browser and display a QR code in the terminal.

### On iOS Simulator

```bash
npm run ios
```

Requires Xcode installed on macOS.

### On Android Emulator

```bash
npm run android
```

Requires Android Studio and an Android emulator configured.

### On Physical Device with Expo Go

1. Install **Expo Go** app on your device (links above)
2. Run `npm start` to start the development server
3. Scan the QR code below with:
   - **iOS**: Use the Camera app to scan the QR code
   - **Android**: Use the Expo Go app to scan the QR code

#### QR Code Preview

![Expo Go QR Code](./expo-go-preview-qrcode.svg)

_Note: Generate your QR code by running `npm start` and scanning the displayed QR code_

## Testing

The project includes comprehensive unit tests with Jest and React Native Testing Library.

### Run all tests:

```bash
npm test
```

### Current Test Coverage:

- **77 tests** across **7 test suites**
- Components: Text, Currency Selector, Favorite Marker, Text Input, Tabs
- Utilities: Currency search helpers

## Project Structure

```
cryptodotcom-exercise/
  src/
      components/     # Reusable UI components
          currency/     # Currency-related components
          tabs/         # Tab navigation components
          text/         # Custom text component
          text-input/   # Custom text input component
          ...
      features/       # Feature modules (Views & ViewModels)
          home/
          market/
          search/
      models/         # Data models
      navigation/     # Navigation configuration
      utils/          # Utility functions and helpers
  assets/           # Images, fonts, and static files
  .husky/           # Git hooks configuration
```

## Tech Stack

- **Framework**: React Native 0.81.5
- **Platform**: Expo SDK 54
- **Language**: TypeScript 5.9.2
- **State Management**: Zustand 5.0.8
- **Navigation**: React Navigation 7.1.19
- **Styling**: NativeWind 4.2.1 (Tailwind CSS)
- **Testing**: Jest 30.2.0, React Native Testing Library 13.3.3
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Code Quality

This project uses pre-commit hooks to ensure code quality:

- **Linting**: ESLint automatically fixes issues in staged files
- **Formatting**: Prettier formats code before commit
- **Testing**: All tests must pass before commit is allowed

Pre-commit hooks are managed by **Husky** and **lint-staged**.

## Architecture

The project follows the **MVVM (Model-View-ViewModel)** architecture pattern:

- **Models** (`src/models/`): Data structures and types
- **Views** (`src/features/*/views/`): UI components
- **ViewModels** (`src/features/*/store/`): Business logic and state management
- **Components** (`src/components/`): Reusable UI components

## License

Private project - All rights reserved
