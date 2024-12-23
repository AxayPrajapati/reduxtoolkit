import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import {whiteColor, darkBackground, darkGreen} from '../../lib/Colors';
import CustomText from '../CustomText';
import styles from './styles';
import {interRegular} from '../../lib/Constant';

type FontSize = 'vsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const heightArray: any = [30, 40, 50, 60] as const;
heightArray.vsm = heightArray[0];
heightArray.sm = heightArray[1];
heightArray.md = heightArray[2];
heightArray.lg = heightArray[3];

interface ButtonComponentProps {
  title: string;
  image?: ImageSourcePropType;
  onPressIn?: () => void;
  imgstyle?: StyleProp<ImageStyle>;
  fontSize?: FontSize;
  backgroundColor?: string;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  fontFamily?: any;
  onPress?: () => void;
  disabled?: boolean;
  height?: any;
  opacity?: number;
}

const CustomeButton: React.FC<ButtonComponentProps> = props => {
  const {
    title,
    image,
    onPressIn,
    imgstyle,
    fontSize = 'lg',
    backgroundColor = darkGreen,
    textColor = whiteColor,
    textStyle,
    style,
    fontFamily = interRegular,
    onPress,
    disabled,
    height = 'md',
    opacity,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.mainView,
        {
          backgroundColor: disabled ? 'transparent' : backgroundColor,
          height: heightArray[height],
          opacity: opacity,
          borderWidth: disabled ? 2 : 0,
          borderColor: darkBackground,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      onPressIn={onPressIn}
      activeOpacity={0.8}>
      {image && (
        <Image
          source={image}
          style={[styles.imageStyle, imgstyle]}
          resizeMode="contain"
        />
      )}
      <CustomText
        title={title}
        fontSize={fontSize}
        fontFamily={fontFamily}
        textStyle={[
          {
            color: disabled ? darkBackground : textColor,
            paddingVertical: 5,
          },
          textStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default CustomeButton;
