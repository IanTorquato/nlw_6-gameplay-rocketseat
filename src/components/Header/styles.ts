import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 104,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight(),
    width: '100%',
  },
  title: {
    color: theme.colors.heading,
    flex: 1,
    fontFamily: theme.fonts.titleBold,
    fontSize: 20,
    textAlign: 'center',
  },
});
