import { StyleSheet } from 'react-native';

import { theme } from '@global/styles/theme';

export const styles = StyleSheet.create({
  label: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
  },
  form: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  select: {
    alignItems: 'center',
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 64,
    overflow: 'hidden',
    paddingRight: 24,
    width: '100%',
  },
  image: {
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
    height: 64,
    width: 64,
  },
  selectBody: {
    alignItems: 'center',
    flex: 1,
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    width: '100%',
  },
  column: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textMedium,
    fontSize: 16,
    marginRight: 4,
  },
  caracteresLimit: {
    alignSelf: 'center',
    color: theme.colors.highlight,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
  },
  footer: {
    marginTop: 24,
  },
});
