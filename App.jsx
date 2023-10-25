import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native'

const App = () => {
 useEffect(()=>{
  if(Platform.OS==='android'){
    SplashScreen.hide()
  }
  
 },[])

  return (
    <View>
      <Text>Food Delivery App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})