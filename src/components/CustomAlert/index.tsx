import React from 'react';
import {Modal, View, Text, GestureResponderEvent} from 'react-native';
import styles from './styles';
import CustomeButton from '../CustomButton';

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: (event: GestureResponderEvent) => void;
  onConfirm?: (event: GestureResponderEvent) => void;
  confirmText?: string;
  closeText?: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  title,
  message,
  onClose,
  onConfirm,
  confirmText = 'OK',
  closeText = 'Cancel',
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            {onConfirm && (
              <CustomeButton
                style={{width: 100}}
                title={confirmText}
                height={'md'}
                onPress={onConfirm}
              />
            )}
            <CustomeButton
              style={{width: 100}}
              title={closeText}
              height={'md'}
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
