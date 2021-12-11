import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import DiscordImg from '@assets/discord.png';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonIcon({ title, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
