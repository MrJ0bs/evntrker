import { Link, Stack } from 'expo-router';
import {View, Text} from 'react-native'


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Demo Application!' }} />
      <View >
        <Text >This is A Demo Application.</Text>

        <Link href="/"  >
          <Text className='text-2xl'>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}


