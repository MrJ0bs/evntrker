import { Stack, useRouter, useNavigation, Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ImageURISource } from "react-native";


interface EventDates {
    date: string;
    day: string;
    isSelected?: boolean;
}

export const EventDates: React.FC<EventDates> = ({ date, day, isSelected }) => {
    // const [selected, setSelected] = React.useState(false)
    return (
        <TouchableOpacity onPress={() => { }}>
            <View className="p-5 flex items-center justify-between flex-col">
                <Text className="font-bold text-lg">
                    {date.toString()}
                </Text>
                <View className={isSelected ? `w-2 h-2 bg-red-500 absolute top-4 rounded-lg right-4` : `w-2 h-2 bg-transparent absolute top-4 rounded-lg right-4`} />
                <Text className="font-thin text-base">
                    {day}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

// const timelineData = {
//     '6': {
//         'Day': 'Sun',
//         hasEvent: false,
//     },
//     '7': {
//         'Day': 'Mon',
//         hasEvent: {
//             selected: true,
//             eventName: {

//             }
//         }
//     },
//     '8': 'Tue',
//     '9': 'Wed',
//     '10': 'Thu',
//     '11': 'Fri',
//     '12': 'Sat',
//     '13': 'Sun',
//     '14': 'Mon',
// }

// const tdata: Props[] = [
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
//     {
//         title: '',
//         beginningT: '',
//         endingT: '',
//         eventDates: '',
//         location: '',
//         hasEvent: ''
//     },
// ]


// export const EventTimeLine: React.FC = () => {
//     return (
//         <View className="flex flex-row items-center mt-6 mb-4 justify-between w-full">
//             <View className="pl-4 pr-8 py-3 bg-[#F02D2E] rounded-r-3xl">
//                 <Text className="text-lg uppercase font-bold text-white ">sep</Text>
//             </View>
//             <ScrollView className="w-full" showsHorizontalScrollIndicator={false} horizontal={true}>
//                 <View className="w-full flex flex-row">
//                     {
//                         timelineData.forEach((element: EventDates) => <EventDates date={element.date} day={element.day} />);
//                     }
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

export interface Props {
    hasEvent?: boolean
    eventDates: EventDates;
    title: string;
    beginningT: string;
    endingT: string;
    location: string;
}
type ImagesType = Record<'Meeting Auto' | 'Air Legend' | 'Halloween Party', any>;
const images: ImagesType = {
    'Meeting Auto': require('../../../assets/images/Meeting.png'),
    'Air Legend': require('../../../assets/images/jet.png'),
    'Halloween Party': require('../../../assets/images/halo.png')
}

const EventCard: React.FC<Props> = ({ eventDates, beginningT, endingT, location, title }) => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.push({
            pathname: '/(tabs)/(home)/[slug]',
            params: {
                slug: `${title} ${location} ${beginningT} ${endingT} ${eventDates.day} ${eventDates.date} `
            }
        })} className="h-1/5 flex flex-row items-center justify-start w-[90%]">
            <View className="self-start">
                <EventDates date={eventDates.date} day={eventDates.day} />
            </View>
            <Image source={images[title as keyof ImagesType]} className="w-1/3 h-full m-2 p-3 rounded-2xl" resizeMode="contain" />
            <View className="flex flex-col w-full px-5">
                <Text className="text-base font-bold pb-2">
                    {title}
                </Text>
                <View className="flex-row flex space-x-4">
                    <View className="flex-col flex space-y-1">
                        <Text className="text-xs text-black/70">Beginning</Text><Text className="text-xs text-black/70">End</Text><Text className="text-xs text-black/70">Location</Text>
                    </View>
                    <View className="flex-col flex space-y-1">
                        <Text className="text-xs font-bold">{beginningT}</Text><Text className="text-xs font-bold">{endingT}</Text><Text className="text-xs font-bold">{location}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default function HomeScreen() {
    return (
        <View className="bg-white flex items-center justify-start w-full h-screen">
            <View className="flex flex-row items-center mt-6 mb-4 justify-between w-full">
                <View className="pl-4 pr-8 py-3 bg-[#F02D2E] rounded-r-3xl">
                    <Text className="text-lg uppercase font-bold text-white ">sep</Text>
                </View>
                <Text className="text-lg font-medium pr-4 text-black/70">
                    2 Events
                </Text>
            </View>

            <EventCard title="Air Legend" eventDates={{ date: '7', day: 'Mon' }} beginningT="09:00 AM" endingT="01:00 PM" location="Melun" />
            <View className="h-5" />
            <EventCard title="Meeting Auto" eventDates={{ date: '9', day: 'Wed' }} beginningT="01:00 PM" endingT="06:00 PM" location="Saint Cloud" />
            <View className="flex flex-row items-center mt-6 mb-4 justify-between w-full">
                <View className="pl-4 pr-8 py-3 bg-[#F02D2E] rounded-r-3xl">
                    <Text className="text-lg uppercase font-bold text-white ">Oct</Text>
                </View>
                <Text className="text-lg font-medium pr-4 text-black/70">
                    1 Event
                </Text>
            </View>
            <EventCard title="Halloween Party" eventDates={{ date: '31', day: 'Sat' }} beginningT="08:00 PM" endingT="06:00 AM" location="La Rochatte" />
        </View>
    );
}