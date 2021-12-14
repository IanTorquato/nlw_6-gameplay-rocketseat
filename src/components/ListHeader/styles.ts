import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
    width: '100%',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
  },
  subtitle: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
  },
});
