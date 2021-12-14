import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  banner: {
    height: 232,
    width: '100%',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 28,
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 20,
  },
  members: {
    marginLeft: 24,
    marginTop: 24,
  },
  footer: {
    marginBottom: getBottomSpace(),
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
});
