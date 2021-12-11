import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Appointment } from '@components/Appointment';
import { ButtonAdd } from '@components/ButtonAdd';
import { CategorySelect } from '@components/CategorySelect';
import { ListDivider } from '@components/ListDivider';
import { ListHeader } from '@components/ListHeader';
import { Profile } from '@components/Profile';

import { styles } from './styles';

const appointments = [
  {
    id: 1,
    guild: {
      id: 1,
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: 1,
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!',
  },
  {
    id: 2,
    guild: {
      id: 1,
      name: 'Lendários',
      icon: null,
      owner: false,
    },
    category: 1,
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10!',
  },
];

export function Home() {
  const [categorySelected, setCategorySelected] = useState(0);

  function handleCategorySelect(categoryId: number) {
    if (categoryId === categorySelected) {
      setCategorySelected(0);
    } else {
      setCategorySelected(categoryId);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd />
      </View>

      <CategorySelect categorySelected={categorySelected} selectCategory={handleCategorySelect} />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          style={styles.matches}
          data={appointments}
          keyExtractor={(item) => `${item.id}`}
          ItemSeparatorComponent={ListDivider}
          renderItem={({ item }) => <Appointment data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
