import {StyleSheet} from 'react-native';
import {drakGrey} from '../../lib/Colors';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  smallView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  imageStyle: {
    height: 12,
    width: 15,
    marginRight: 5,
    resizeMode: 'contain',
  },
  bordereImageStyle: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  borderedView: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: drakGrey,
    borderWidth: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButton: {
    paddingHorizontal: 14,
    paddingVertical: 1,
  },
});

export default styles;
