// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '@global/styles/theme';

import { AppBackground } from '@components/AppBackground';
import { Button } from '@components/Button';
import { CategorySelect } from '@components/CategorySelect';
import { Header } from '@components/Header';
import { SmallInput } from '@components/SmallInput';
import { TextArea } from '@components/TextArea';

import { styles } from './styles';

export function AppointmentCreate() {
  const [categorySelected, setCategorySelected] = useState(0);

  function handleCategorySelect(categoryId: number) {
    if (categoryId === categorySelected) {
      setCategorySelected(0);
    } else {
      setCategorySelected(categoryId);
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView>
        <AppBackground>
          <Header title="Agendar partida" />

          <Text style={[styles.label, { marginBottom: 16, marginLeft: 24, marginTop: 32 }]}>Categoria</Text>

          <CategorySelect categorySelected={categorySelected} selectCategory={handleCategorySelect} hasCheckBox />

          <View style={styles.form}>
            <RectButton>
              <View style={styles.select}>
                <View style={styles.image} />

                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione um servidor</Text>
                </View>

                <Feather name="chevron-right" color={theme.colors.heading} size={18} />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}>/</Text>

                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}>:</Text>

                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 8 }]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea maxLength={100} numberOfLines={5} autoCorrect={false} multiline />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </AppBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
