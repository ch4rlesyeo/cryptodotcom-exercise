import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import { TRootStackParams } from './use-root-navigation';

export const RootStack = createNativeStackNavigator<TRootStackParams>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
