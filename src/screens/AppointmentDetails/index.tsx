// eslint-disable-next-line import/no-extraneous-dependencies
import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '@global/styles/theme';

import { AppBackground } from '@components/AppBackground';
import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { ListDivider } from '@components/ListDivider';
import { ListHeader } from '@components/ListHeader';
import { Member } from '@components/Member';

import BannerPng from '@assets/banner.png';

import { styles } from './styles';

export function AppointmentDetails() {
  const members = [
    { id: 1, username: 'Ian Torquato', avatarUrl: 'https://github.com/iantorquato.png', status: 'online' },
    { id: 2, username: 'Rodrigo', avatarUrl: 'https://github.com/rodrigorgtic.png', status: 'offline' },
    { id: 3, username: 'Diego Fernandes', avatarUrl: 'https://github.com/diego3g.png', status: 'online' },
  ];

  return (
    <AppBackground>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={24} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10!</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={ListDivider}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </AppBackground>
  );
}
