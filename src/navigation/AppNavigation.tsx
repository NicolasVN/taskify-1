import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Sign } from "../screens/sign";
import { Register } from "../screens/register";
import { TabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sign" component={Sign} />

        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Main" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
