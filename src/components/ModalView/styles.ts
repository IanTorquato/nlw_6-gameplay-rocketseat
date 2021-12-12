import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: theme.colors.overlay,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 104,
  },
  bar: {
    alignSelf: 'center',
    backgroundColor: theme.colors.secondary30,
    borderRadius: 2,
    height: 2,
    marginBottom: 104,
    marginTop: 12,
    width: 40,
  },
});
