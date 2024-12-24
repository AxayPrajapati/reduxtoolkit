import {ImageRequireSource} from 'react-native';

interface ImagesInterface {
  downArrow: ImageRequireSource;
  like: ImageRequireSource;
  unlike: ImageRequireSource;
  search: ImageRequireSource;
  eye: ImageRequireSource;
  share: ImageRequireSource;
  user: ImageRequireSource;
  calendar: ImageRequireSource;
  arrowRight: ImageRequireSource;
  demoImage: ImageRequireSource;
  facebook: ImageRequireSource;
  google: ImageRequireSource;
  apple: ImageRequireSource;
  eyeHide: ImageRequireSource;
  noData: ImageRequireSource;
  logo: ImageRequireSource;
}

const Images: ImagesInterface = {
  downArrow: require('../assets/images/downArrow.png'),
  like: require('../assets/images/like.png'),
  unlike: require('../assets/images/heart_outline.png'),
  search: require('../assets/images/search.png'),
  eye: require('../assets/images/Eye.png'),
  share: require('../assets/images/share.png'),
  user: require('../assets/images/user.png'),
  calendar: require('../assets/images/Calendar_Days.png'),
  arrowRight: require('../assets/images/arrow-right.png'),
  demoImage: require('../assets/images/image29.png'),
  facebook: require('../assets/images/facebook.png'),
  google: require('../assets/images/google.png'),
  apple: require('../assets/images/apple.png'),
  eyeHide: require('../assets/images/eyeClose.png'),
  noData: require('../assets/images/noData.jpg'),
  logo: require('../assets/images/logo.png'),
};

export default Images;
