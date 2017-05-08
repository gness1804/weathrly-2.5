import { StyleSheet } from 'react-native';
import commonElements from './commonElements';

const styles = StyleSheet.create({
  instructions: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
  },
  locationInput: {
    marginRight: commonElements.inputField.marginRight,
    width: commonElements.inputField.width,
  },
  locationInputContainer: {
    alignItems: commonElements.inputContainer.alignItems,
    flexDirection: commonElements.inputContainer.flexDirection,
    justifyContent: commonElements.inputContainer.justifyContent,
    marginBottom: commonElements.inputContainer.marginBottom,
  },
  statePicker: {
    alignSelf: 'center',
    width: '90%',
  },
})

export default styles
