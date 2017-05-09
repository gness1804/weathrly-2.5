import { StyleSheet } from 'react-native';
import commonElements from './commonElements';

const styles = StyleSheet.create({
  button: {
    alignSelf: commonElements.button.alignSelf,
    marginBottom: commonElements.button.marginBottom,
    width: commonElements.button.width,
  },
  container: {
    alignItems: 'center',
    backgroundColor: commonElements.backgroundColor,
    flex: 1,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 40,
    marginTop: 60,
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
    marginBottom: 40,
    width: '90%',
  },
})

export default styles
