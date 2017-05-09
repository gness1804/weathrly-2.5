import { StyleSheet } from 'react-native';
import commonElements from './commonElements';

const styles = StyleSheet.create({
  clearCity: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    width: '90%',
  },
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
  selectModeDropdown: {
    marginBottom: 40,
  },
  selectModeText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  statePicker: {
    alignSelf: 'center',
    width: '90%',
  },
  topPart: {
    marginTop: 50,
  },
  weatherCardsList: {
    marginBottom: 30,
  },
  zipButton: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  zipInput: {
    marginRight: commonElements.inputField.marginRight,
    width: commonElements.inputField.width,
  },
  zipInputContainer: {
    alignItems: commonElements.inputContainer.alignItems,
    flexDirection: commonElements.inputContainer.flexDirection,
    justifyContent: commonElements.inputContainer.justifyContent,
    marginBottom: commonElements.inputContainer.marginBottom,
  },
})

export default styles
