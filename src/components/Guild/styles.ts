import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 24,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
    marginBottom: 8,
  },
  type: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
  },
});
