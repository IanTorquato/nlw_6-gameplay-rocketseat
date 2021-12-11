import React, { useState } from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '@components/ButtonAdd';
import { CategorySelect } from '@components/CategorySelect';
import { Profile } from '@components/Profile';

import { styles } from './styles';

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
    </View>
  );
}
