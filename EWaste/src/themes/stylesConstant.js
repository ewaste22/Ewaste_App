import { StyleSheet } from 'react-native';
import { COLORS } from '.';

export default StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'white',
    elevation: 4,
    marginBottom: 10,
  },
  spaceBeetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
});