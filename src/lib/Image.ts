import {ImageRequireSource} from 'react-native';

interface CustomImagesInterface {
  downArrow: ImageRequireSource;
}

const CustomImages: CustomImagesInterface = {
  downArrow: require('../assets/images/downArrow.png'),
};

export default CustomImages;
