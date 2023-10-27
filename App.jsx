
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable,Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native'
import { Carousel, Pagination } from 'react-native-snap-carousel'
import { splashScreenData } from './src/Utility/statData'
import { Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()



function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const App = () => {

  const { width, height } = Dimensions.get('window')

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide()
      console.log(splashScreenData)
    }

  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


export default App;

const styles = StyleSheet.create({});
