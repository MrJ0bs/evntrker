import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, usePathname } from 'expo-router';
import { Pressable } from 'react-native';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Tabs
      initialRouteName='(home)'
      screenOptions={{
        tabBarActiveTintColor: '#3759EE',
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Upcoming Events',
          headerTitleStyle: {
            fontSize: 28,
            fontWeight: 'bold',
            paddingLeft: 20
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="list-ul"
                    size={22}
                    color={'#000'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="drawer"
        options={{
          title: 'Drawer',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Sec',
          tabBarIcon: ({ color }) => <TabBarIcon name="align-justify" color={color} />,
        }}
      />
    </Tabs>
  );
}
