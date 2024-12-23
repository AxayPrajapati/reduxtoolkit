import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

type HomeStackParamList = {
  HomeScreen: undefined;
};

const HomeStack: React.FC = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
