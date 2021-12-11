import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondary90,
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
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 16,
    marginBottom: 64,
    textAlign: 'center',
  },
});
