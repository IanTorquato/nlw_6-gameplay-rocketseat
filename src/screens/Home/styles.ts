import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginTop: getStatusBarHeight() + 24,
    paddingHorizontal: 24,
    width: '100%',
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
