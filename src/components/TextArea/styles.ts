import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.textRegular,
    fontSize: 14,
    height: 96,
    marginRight: 4,
    textAlign: 'center',
    width: '100%',
  },
});
