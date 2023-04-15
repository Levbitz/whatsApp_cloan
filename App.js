import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ThemeProvider from './src/assets/context/themeContext/theme';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <ThemeProvider>
    <Stack.Navigator>
    <Stack.Screen
    options={{
      headerShown: false,
    }}
    name="Login"
    component={LoginScreen}
  />
  <Stack.Screen
    options={{
      headerShown: false,
    }}
    name="Register"
    component={RegisterScreen}
  />
  </Stack.Navigator>
    </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
