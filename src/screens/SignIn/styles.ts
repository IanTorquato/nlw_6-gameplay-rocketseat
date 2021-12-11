import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  illustration: {
    height: 360,
    width: '100%',
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 48,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleMedium,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 64,
    textAlign: 'center',
  },
});
