import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import styles from './styles';
import CustomText from '../CustomText';
import {darkShadeGrey} from '../../lib/Colors';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  inputStyles?: StyleProp<TextStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  errorMessage,
  inputStyles,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <CustomText title={label} textStyle={styles.label} />}
      <TextInput
        placeholderTextColor={darkShadeGrey}
        style={[styles.input, inputStyles]}
        {...props}
      />
      {errorMessage && (
        <CustomText title={errorMessage} textStyle={styles.error} />
      )}
    </View>
  );
};

export default CustomTextInput;
