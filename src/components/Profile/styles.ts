import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleMedium,
    fontSize: 24,
    marginRight: 4,
  },
  username: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 24,
  },
  message: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textRegular,
  },
});
