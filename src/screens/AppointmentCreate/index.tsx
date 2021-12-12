// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '@global/styles/theme';

import { AppBackground } from '@components/AppBackground';
import { Button } from '@components/Button';
import { CategorySelect } from '@components/CategorySelect';
import { GuildProps } from '@components/Guild';
import { GuildIcon } from '@components/GuildIcon';
import { Header } from '@components/Header';
import { ModalView } from '@components/ModalView';
import { SmallInput } from '@components/SmallInput';
import { TextArea } from '@components/TextArea';

import { Guilds } from '@screens/Guilds';

import { styles } from './styles';

export function AppointmentCreate() {
  const [categorySelected, setCategorySelected] = useState(0);
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>();

  function handleCategorySelect(categoryId: number) {
    if (categoryId === categorySelected) {
      setCategorySelected(0);
    } else {
      setCategorySelected(categoryId);
    }
  }

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView>
        <AppBackground>
          <Header title="Agendar partida" />

          <Text style={[styles.label, { marginBottom: 16, marginLeft: 24, marginTop: 32 }]}>Categoria</Text>

          <CategorySelect categorySelected={categorySelected} selectCategory={handleCategorySelect} hasCheckBox />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuildsModal}>
              <View style={styles.select}>
                {guild?.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>{guild ? guild.name : 'Selecione um servidor'}</Text>
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

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
