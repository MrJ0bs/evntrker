import { View, Image, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { EventDates } from '.'
// import { EventTimeLine } from '.'


export default function Details() {
  const { slug } = useLocalSearchParams()
  function parseSlug(slug: string): string[] {
    // Decoding the URL-encoded string to replace '%20' with spaces, and '%3A' with colons
    const decodedSlug = decodeURIComponent(slug);
    const slugArray = decodedSlug.split(' ');
    return slugArray;
  }
  const result = parseSlug(slug.toString())
  console.log(result);
  const EventTimeLine: React.FC = () => {
    return (
      <View className="flex flex-row items-center mt-6 mb-4 justify-between w-full">
        <View className="pl-4 pr-8 py-3 bg-[#F02D2E] rounded-r-3xl">
          <Text className="text-lg uppercase font-bold text-white ">{result[0] === "Halloween" ? 'Oct' : 'Sep' }</Text>
        </View>
        <ScrollView className="w-full" showsHorizontalScrollIndicator={false} horizontal={true}>
          <View className="w-full flex flex-row">
            <EventDates date={'6'} day="Sun" />
            <EventDates date={'7'} day="Mon" isSelected={true} />
            <EventDates date={'8'} day="Tue" />
            <EventDates date={'9'} day="Wed" isSelected={true} />
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
  const images = {
    car: require('../../../assets/images/Meeting.png'),
    jet: require('../../../assets/images/jet.png'),
    halo: require('../../../assets/images/halo.png')
  }
  return (
    <View className='h-full w-screen flex items-center justify-start'>
      <EventTimeLine />
      <ScrollView className='w-full h-full '>
        <View className='h-screen bg-white flex items-center justify-start my-4'>
          {
            result[0] === 'Meeting' ?
              <Image source={images.car} className="w-[90%] h-[80%] rounded-2xl" resizeMode="cover" />
              : null
          }
          {
            result[0] === 'Halloween' ?
              <Image source={images.halo} className="w-[90%] h-[80%] rounded-2xl" resizeMode="cover" />
              : null
          }
          {
            result[0] === 'Air' ?
              <Image source={images.jet} className="w-[90%] h-[80%] rounded-2xl" resizeMode="cover" />
              : null
          }
          <View className='flex flex-row w-full px-10 my-4 items-center justify-between'>
            {/* Title */}
            <Text className='text-lg font-bold'>{result[0] + ' ' + result[1]}</Text>
            {/* Location */}
            <Text className='text-sm font-medium'>Location - {result[2] + ' ' + result[3]}</Text>
          </View>
          <View className="flex flex-row-reverse items-center justify-between w-full my-2 px-10">
            <View className='flex flex-row gap-6'>
              {/* Entry Time */}
              <Text className='text-sm font-semibold '>{result[4] + ' ' + result[5]}</Text>
              {/* Exit Time */}
              <Text className='text-sm'>{result[6] + ' ' + result[7]}</Text>
            </View>
            {/* Date */}
            <Text className='text-sm'>{result[8] + ' ' + result[9]}</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}