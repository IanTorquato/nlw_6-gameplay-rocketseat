import React, { ReactNode } from 'react';
import { Modal, ModalProps, View } from 'react-native';

import { AppBackground } from '@components/AppBackground';

import { styles } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal animationType="slide" transparent {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <AppBackground>
            <View style={styles.bar} />

            {children}
          </AppBackground>
        </View>
      </View>
    </Modal>
  );
}
