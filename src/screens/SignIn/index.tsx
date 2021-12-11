import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';

import IllustrationImg from '@assets/illustration.png';

import { styles } from './styles';

export function SignIn() {
  const { navigate } = useNavigation();

  function handleSignIn() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate('Home' as any);
  }

  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} resizeMode="stretch" style={styles.illustration} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}e organize suas {'\n'}jogatinas
        </Text>

        <Text style={styles.subtitle}>Crie grupos para jogar seus games {'\n'}favoritos com seus amigos</Text>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
