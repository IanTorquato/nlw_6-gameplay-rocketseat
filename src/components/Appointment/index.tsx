import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '@global/styles/theme';

import { categories } from '@utils/categories';

import { GuildIcon } from '@components/GuildIcon';

import CalendarSvg from '@assets/calendar.svg';
import PlayerSvg from '@assets/player.svg';

import { styles } from './styles';

export type GuildProps = {
  id: number;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: number;
  guild: GuildProps;
  category: number;
  date: string;
  description: string;
};

interface Props extends RectButtonProps {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);

  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <CalendarSvg />

            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[styles.player, { color: owner ? primary : on }]}>{owner ? 'Anfitrião' : 'Visitante'}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
