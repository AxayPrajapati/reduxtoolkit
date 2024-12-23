import React from 'react';
import {Image, StyleSheet, ImageStyle, ViewStyle} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import CustomImages from '../lib/Image';
import {whiteColor, activeColor, black} from '../lib/Colors';
import EventScreen from '../screens/dashboard/EventScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import SearchScreen from '../screens/dashboard/SearchScreen';
import Favorite from '../screens/dashboard/Favorite';

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
          let iconName: number | undefined;

          switch (route.name) {
            case 'Search':
              iconName = CustomImages.downArrow;
              break;
            case 'Events':
              iconName = CustomImages.downArrow;
              break;
            case 'Favorites':
              iconName = CustomImages.downArrow;
              break;
            case 'Profile':
              iconName = CustomImages.downArrow;
              break;
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
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

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
