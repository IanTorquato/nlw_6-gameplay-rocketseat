import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 8,
    height: 120,
    justifyContent: 'center',
    marginRight: 8,
    width: 104,
  },
  content: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    height: 116,
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: 100,
  },
  check: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderRadius: 4,
    borderWidth: 2,
    height: 12,
    marginRight: 8,
    width: 12,
  },
  checked: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    height: 10,
    marginRight: 8,
    marginBottom: 2,
    width: 10,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleMedium,
    fontSize: 16,
  },
});
