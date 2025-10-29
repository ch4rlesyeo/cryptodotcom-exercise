import { ScrollView, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView className="flex-1">
      {/* Header Section */}
      <View className="px-6">
        <Text className="text-4xl mb-2 font-rubik-bold">Welcome!</Text>
        <Text className="text-lg font-rubik-regular">
          This is a React Native app with NativeWind & Rubik font
        </Text>
      </View>

      {/* Content Section */}
      <View className="px-6 py-8">
        {/* Card 1 */}
        <View className="bg-gray-100 rounded-lg p-6 mb-4 shadow-sm">
          <Text className="text-2xl text-gray-800 mb-2 font-rubik-semibold">
            Card Title
          </Text>
          <Text className="text-base text-gray-600 leading-6 font-rubik-regular">
            This is an example card using NativeWind for styling. The text uses
            the Rubik font family for a clean, modern look.
          </Text>
        </View>

        {/* Card 2 */}
        <View className="bg-green-50 rounded-lg p-6 mb-4 border border-green-200">
          <Text className="text-xl text-green-800 mb-2 font-rubik-medium">
            Another Example
          </Text>
          <Text className="text-sm text-green-700 font-rubik-regular">
            NativeWind allows you to use Tailwind CSS classes directly in your
            React Native components.
          </Text>
        </View>

        {/* Card 3 - Feature List */}
        <View className="bg-purple-50 rounded-lg p-6 mb-4">
          <Text className="text-2xl text-purple-800 mb-4 font-rubik-bold">
            Features
          </Text>

          <View className="mb-3">
            <Text className="text-base text-purple-900 mb-1 font-rubik-semibold">
              • NativeWind Integration
            </Text>
            <Text className="text-sm text-purple-700 ml-4 font-rubik-regular">
              Use Tailwind CSS classes in React Native
            </Text>
          </View>

          <View className="mb-3">
            <Text className="text-base text-purple-900 mb-1 font-rubik-semibold">
              • Rubik Font Family
            </Text>
            <Text className="text-sm text-purple-700 ml-4 font-rubik-regular">
              Beautiful typography with Google Fonts
            </Text>
          </View>

          <View className="mb-3">
            <Text className="text-base text-purple-900 mb-1 font-rubik-semibold">
              • TypeScript Support
            </Text>
            <Text className="text-sm text-purple-700 ml-4 font-rubik-regular">
              Full type safety throughout the app
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View className="items-center py-6">
          <Text className="text-xs text-gray-400 font-rubik-regular">
            Built with React Native & Expo
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
