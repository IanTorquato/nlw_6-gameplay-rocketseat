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
    { id: 1, name: 'Lendários 1', icon: 'icon', owner: true },
    { id: 2, name: 'Lendários 2', icon: 'icon', owner: true },
    { id: 3, name: 'Lendários 3', icon: 'icon', owner: true },
    { id: 4, name: 'Lendários 4', icon: 'icon', owner: true },
    { id: 5, name: 'Lendários 5', icon: 'icon', owner: true },
    { id: 6, name: 'Lendários 6', icon: 'icon', owner: true },
    { id: 7, name: 'Lendários 7', icon: 'icon', owner: true },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildSelect(item)} />}
        contentContainerStyle={{ paddingBottom: 168, paddingTop: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
