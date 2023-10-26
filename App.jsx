
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native'
import {Carousel,Pagination} from 'react-native-snap-carousel'
import {splashScreenData} from './src/Utility/statData'
import { Dimensions } from 'react-native'




const Stack = createNativeStackNavigator();
const App = () => {

  const {width,height} = Dimensions.get('window')

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide()
      console.log(splashScreenData)
    }

  }, [])
  


  return (

    <SafeAreaView>
      <Text style={{flexGrow:2}}>Hello kkks</Text>
    </SafeAreaView>
  )
}


export default App;

const styles = StyleSheet.create({});
