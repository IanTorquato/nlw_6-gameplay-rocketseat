import React from 'react';
import { Text, View } from 'react-native';

import { Avatar } from '@components/Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://github.com/iantorquato.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>

          <Text style={styles.username}>Ian Torquato</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
