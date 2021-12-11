import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { categories } from '@utils/categories';

import { Category } from '@components/Category';

import { styles } from './styles';

type Props = {
  categorySelected: number;
  selectCategory: (categoryId: number) => void;
};

export function CategorySelect({ categorySelected, selectCategory }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingRight: 40 }} showsHorizontalScrollIndicator={false} horizontal>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => selectCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
