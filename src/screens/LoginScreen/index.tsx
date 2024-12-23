/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Styles';
import {login} from '../../store/slices/authSlice';
import {useDispatch} from 'react-redux';
import CustomeButton from '../../components/CustomButton';

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomeButton onPress={onPressLogin} title="Login" height={'lg'} />
    </SafeAreaView>
  );
};

export default LoginScreen;
