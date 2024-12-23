import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {drakGrey, lightGray, whiteColor} from '../../lib/Colors';
import {
  interRegular,
  interMedium,
  interBold,
  interSemiBold,
} from '../../lib/Constant';

const fontSizeArray: any = {
  vsm: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
} as const;

const colorArray = {
  white: whiteColor,
  lightGrey: lightGray,
  darkGrey: drakGrey,
} as const;

const fontFamilyArray = {
  regular: interRegular,
  medium: interMedium,
  semibold: interSemiBold,
  bold: interBold,
} as const;

type FontSize = keyof typeof fontSizeArray;
type Color = keyof typeof colorArray;

interface CustomTextProps {
  fontSize?: FontSize;
  color?: Color;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = props => {
  const {
    fontSize = 'lg',
    color = 'darkGrey',
    fontFamily = interRegular,
    title,
    textStyle,
    ...restProps
  } = props;

  return (
    <Text
      {...restProps}
      style={[
        {
          fontSize: fontSizeArray[fontSize],
          color: colorArray[color],
          fontFamily: fontFamilyArray[fontFamily],
        },
        textStyle,
      ]}>
      {title}
    </Text>
  );
};

export default CustomText;
