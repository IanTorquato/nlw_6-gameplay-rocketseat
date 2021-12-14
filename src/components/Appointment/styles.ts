import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  guildIconContainer: {
    alignItems: 'center',
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    marginRight: 24,
    width: 64,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
  },
  category: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  date: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.textMedium,
    fontSize: 13,
    marginLeft: 8,
  },
  playersInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  player: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.textMedium,
    fontSize: 14,
    marginLeft: 8,
    marginRight: 24,
  },
});
