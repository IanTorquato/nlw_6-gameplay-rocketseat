import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { categories } from '@utils/categories';

import { styles } from './styles';

export function CategorySelect() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingRight: 40 }} showsHorizontalScrollIndicator={false} horizontal>
      {categories.map((category) => (
        <View key={category.id}>
          <category.icon />
        </View>
      ))}
    </ScrollView>
  );
}
