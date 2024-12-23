import {StyleSheet} from 'react-native';
import {drakGrey, whiteColor} from '../../../lib/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: drakGrey,
  },
});

export default styles;
