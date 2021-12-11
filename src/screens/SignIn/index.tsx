import React from 'react';
import { Image, Text, View } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';

import IllustrationImg from '@assets/illustration.png';

import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} resizeMode="stretch" style={styles.illustration} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" />
      </View>
    </View>
  );
}
