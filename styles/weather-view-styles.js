import { StyleSheet } from 'react-native';
import commonElements from './commonElements'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: commonElements.backgroundColor,
    flex: 1,
  },
  headline: {
    fontSize: commonElements.headline.fontSize,
    fontWeight: commonElements.headline.fontWeight,
    marginBottom: commonElements.headline.marginBottom,
    marginTop: commonElements.headline.marginTop,
    textAlign: commonElements.headline.textAlign,
  },
})

export default styles
