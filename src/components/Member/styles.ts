import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
  },
  status: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bulletStatus: {
    borderRadius: 4,
    height: 8,
    marginRight: 8,
    width: 8,
  },
  nameStatus: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textRegular,
    fontSize: 14,
  },
});
