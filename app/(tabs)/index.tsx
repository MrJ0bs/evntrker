import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <View>
      <Stack.Screen options={{headerTitle: 'Demo Application For Resume'}}  />
      <Text>This Is A Show App Without Any Implementations</Text>
    </View>
  )
}