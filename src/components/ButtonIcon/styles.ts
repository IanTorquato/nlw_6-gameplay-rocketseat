import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    height: 56,
    width: '100%',
  },
  iconWrapper: {
    alignItems: 'center',
    borderColor: theme.colors.line,
    borderRightWidth: 1,
    justifyContent: 'center',
    height: 56,
    width: 56,
  },
  icon: {
    height: 18,
    width: 24,
  },
  title: {
    color: theme.colors.heading,
    flex: 1,
    fontFamily: theme.fonts.textMedium,
    fontSize: 16,
    textAlign: 'center',
  },
});
