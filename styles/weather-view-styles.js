import { StyleSheet } from 'react-native';
import commonElements from './commonElements';

const styles = StyleSheet.create({
  cardsContainer: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: commonElements.backgroundColor,
    flex: 1,
  },
  headline: {
    fontSize: commonElements.headline.fontSize,
    fontWeight: commonElements.headline.fontWeight,
    marginBottom: 30,
    marginTop: commonElements.headline.marginTop,
    textAlign: commonElements.headline.textAlign,
  },
  homeButton: {
    marginBottom: 20,
    marginTop: 20,
  },
});

export default styles;
