import React from 'react';
import { FlatList, View } from 'react-native';

import { Guild, GuildProps } from '@components/Guild';
import { ListDivider } from '@components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guid: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    { id: 1, name: 'Lendários', icon: 'icon', owner: true },
    { id: 2, name: 'Lendários 2', icon: 'icon', owner: true },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={ListDivider}
        renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildSelect(item)} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
