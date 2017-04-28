import { StyleSheet } from 'react-native';
import commonElements from './commonElements';

const styles = StyleSheet.create({
  clearCity: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    padding: 20,
    width: '90%',
  },
  instructions: {
    fontSize: 18,
    marginBottom: 5,
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
  },
  selectModeText: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  statePicker: {
    alignSelf: 'center',
    width: '90%',
  },
  toggleInputsButtons: {
    backgroundColor: 'rgb(12, 56, 221)',
    borderColor: '#000',
    borderWidth: 1,
    color: '#FFF',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 15,
    textAlign: 'center',
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
  },
})

export default styles
