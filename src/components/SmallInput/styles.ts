import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.textRegular,
    fontSize: 14,
    height: 48,
    marginRight: 4,
    textAlign: 'center',
    width: 48,
  },
});
