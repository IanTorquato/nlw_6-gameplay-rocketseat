import React from 'react';
import { Alert, Image, Text, View } from 'react-native';

import { useAuth } from '@contexts/Auth';

import { AppBackground } from '@components/AppBackground';
import { ButtonIcon } from '@components/ButtonIcon';

import IllustrationImg from '@assets/illustration.png';

import { styles } from './styles';

export function SignIn() {
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error as string);
    }
  }

  return (
    <AppBackground>
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
    </AppBackground>
  );
}
