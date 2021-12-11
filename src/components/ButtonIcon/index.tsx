import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '@assets/discord.png';

import { styles } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function ButtonIcon({ title, ...props }: Props) {
  return (
    <RectButton style={styles.container} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
