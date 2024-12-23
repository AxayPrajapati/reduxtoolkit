import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

type LoginStackParamList = {
  LoginScreen: undefined;
};

const LoginStack: React.FC = () => {
  const Stack = createNativeStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
