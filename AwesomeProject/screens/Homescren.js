import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Homescren = () => {
  return (
    <View className='flex-1 justify-center items-center space-y-10 bg-black-500'>
      <StatusBar style='light'/>
      
      <Text>Homescren</Text>
    </View>
  )
}


export default Homescren