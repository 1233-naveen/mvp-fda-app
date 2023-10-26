import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUp from './src/Screens/Authenticate/SignUp';
import {SafeAreaView} from 'react-native';
import Login from './src/Screens/Authenticate/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
