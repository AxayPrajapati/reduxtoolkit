import React from 'react';
import {Image, StyleSheet, ImageStyle, ViewStyle} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import Images from '../lib/Image';
import {whiteColor, activeColor, black} from '../lib/Colors';
import EventScreen from '../screens/dashboard/EventScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import SearchScreen from '../screens/dashboard/SearchScreen';
import Favorite from '../screens/dashboard/Favorite';

// Define the Tab navigation parameters
type TabParamList = {
  Search: undefined;
  Events: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={({route}: BottomTabScreenProps<TabParamList>) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: black,
        tabBarIcon: ({focused}: {focused: boolean}) => {
          // Define icon based on route name
          let iconName: number | undefined;

          switch (route.name) {
            case 'Search':
              iconName = Images.search;
              break;
            case 'Events':
              iconName = Images.calendar;
              break;
            case 'Favorites':
              iconName = Images.unlike;
              break;
            case 'Profile':
              iconName = Images.user;
              break;
            default:
              console.error('No icon found for route:', route.name);
              return null;
          }

          return (
            <Image
              source={iconName}
              style={[
                styles.icon,
                {
                  tintColor: focused ? activeColor : undefined,
                },
              ]}
            />
          );
        },
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Events" component={EventScreen} />
      <Tab.Screen name="Favorites" component={Favorite} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;

// Define styles for the TabBar
interface Styles {
  container: ViewStyle;
  icon: ImageStyle;
  tabBarStyle: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  tabBarStyle: {
    borderTopWidth: 1,
    elevation: 0,
    backgroundColor: whiteColor,
    paddingBottom: 2,
  },
});
