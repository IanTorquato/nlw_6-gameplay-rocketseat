import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { theme } from '@global/styles/theme';

import { styles } from './styles';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({ title, icon: Icon, checked = false, ...rest }: Props) {
  const { secondary50, secondary60 } = theme.colors;

  return (
    <RectButton style={styles.container} {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary60]}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}></View>

          <Icon height={48} width={48} />

          <Text>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}