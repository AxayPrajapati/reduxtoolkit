/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './Styles';

import CustomText from '../../components/CustomText';
import {logOut} from '../../reduxtoolkit/slices/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import CustomeButton from '../../components/CustomButton';
import {GET} from '../../services/axiosServices';
import CustomTextInput from '../../components/CustomTextInput';
import {extraSpaceRemove} from '../../lib/Helper';
import CustomAlert from '../../components/CustomAlert';
//import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  email: string;
}

const HomeScreen: React.FC = () => {
  const [value, setValue] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  }, []);

  // const queryClient = useQueryClient();

  const fetchUser = async () => {
    const url = 'employees'; // Adjust the URL as needed
    const response = await GET(url);
    console.log('res::::', response);
  };

  const onPressLogOut = () => {
    dispatch(logOut());
  };

  const onChangeText = (text: string) => {
    let val = extraSpaceRemove(text);
    setValue(val);
  };

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  const confirmAlert = () => {
    setAlertVisible(false);
    // Handle confirm action here
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        label="Enter Name"
        value={value}
        onChangeText={onChangeText}
        //errorMessage="Error"
      />
      <CustomeButton title="LogOut" height={'lg'} onPress={onPressLogOut} />
      {alertVisible && (
        <CustomAlert
          visible={alertVisible}
          title="Custom Alert"
          message="This is a custom alert message."
          onClose={hideAlert}
          //onConfirm={confirmAlert}
          confirmText="Confirm"
          closeText="ok"
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
