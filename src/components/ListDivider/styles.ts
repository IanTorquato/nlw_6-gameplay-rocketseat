import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.secondary40,
    height: 1,
    marginBottom: 32,
    marginTop: 2,
    width: '72%',
  },
});
