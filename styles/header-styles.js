import { StyleSheet } from 'react-native';
import commonElements from './commonElements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  credit: {
    marginTop: 10,
  },
  headline: {
    fontSize: commonElements.headline.fontSize,
    fontWeight: commonElements.headline.fontWeight,
    marginBottom: commonElements.headline.marginBottom,
    marginTop: commonElements.headline.marginTop,
    textAlign: commonElements.headline.textAlign,
  },
  pic: {
    height: 70,
    marginTop: 10,
    width: 100,
  },
  tagline: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default styles;
