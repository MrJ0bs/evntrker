import { View, Image, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { EventDates } from '.'
// import { EventTimeLine } from '.'

export default function Details() {
  const { slug } = useLocalSearchParams()

  const data = slug.toString().includes('7')
  
  console.log(data);

  const EventTimeLine: React.FC = () => {
    return (
      <View className="flex flex-row items-center mt-6 mb-4 justify-between w-full">
        <View className="pl-4 pr-8 py-3 bg-[#F02D2E] rounded-r-3xl">
          <Text className="text-lg uppercase font-bold text-white ">sep</Text>
        </View>
        <ScrollView className="w-full" showsHorizontalScrollIndicator={false} horizontal={true}>
          <View className="w-full flex flex-row">
            <EventDates date={'6'} day="Sun" />
            <EventDates date={'7'} day="Mon" />
            <EventDates date={'8'} day="Tue" />
            <EventDates date={'9'} day="Wed" />
            <EventDates date={'10'} day="Thu" />
            <EventDates date={'11'} day="Fri" />
            <EventDates date={'12'} day="Sat" />
            <EventDates date={'13'} day="Sun" />
            <EventDates date={'14'} day="Mon" />
          </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View className='h-full w-screen flex items-center justify-start'>
      <EventTimeLine />
      <Image source={require('../../../assets/images/jet.png')} className="w-[90%] h-[80%] rounded-2xl" resizeMode="cover" />
    </View>
  )
}