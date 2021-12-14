import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback, View } from 'react-native';

import { AppBackground } from '@components/AppBackground';

import { styles } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  close: () => void;
}

export function ModalView({ children, close, ...rest }: Props) {
  return (
    <Modal animationType="slide" transparent statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <AppBackground>
              <View style={styles.bar} />

              {children}
            </AppBackground>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
