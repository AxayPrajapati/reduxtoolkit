import {StyleSheet} from 'react-native';
import {drakGrey, errorColor, whiteColor} from '../../lib/Colors';
import {deviceHeight, interMedium, interRegular} from '../../lib/Constant';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: drakGrey,
    fontFamily: interMedium,
  },
  input: {
    height: deviceHeight * 0.06,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: whiteColor,
    fontFamily: interRegular,
    fontSize: 14,
    color: drakGrey,
  },
  error: {
    fontSize: 12,
    color: errorColor,
    marginTop: 5,
    fontFamily: interMedium,
  },
});

export default styles;
