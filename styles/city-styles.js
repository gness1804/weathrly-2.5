import { StyleSheet } from 'react-native';

const degreeReadout = {
  fontSize: 24,
  textAlign: 'center',
}

const text = {
  fontSize: 18,
  fontWeight: '600',
  textAlign: 'center',
}

const styles = StyleSheet.create({
  chilly: {
    color: '#2E7CC7',
    fontSize: degreeReadout.fontSize,
    textAlign: degreeReadout.textAlign,
  },
  cold: {
    color: '#180FC1',
    fontSize: degreeReadout.fontSize,
    textAlign: degreeReadout.textAlign,
  },
  container: {
    backgroundColor: 'rgb(244, 254, 255)',
    borderColor: 'rgb(44, 57, 58)',
    borderRadius: 3,
    borderWidth: 1,
    marginRight: 20,
    padding: 10,
  },
  hot: {
    color: '#EB2C08',
    fontSize: degreeReadout.fontSize,
    textAlign: degreeReadout.textAlign,
  },
  icon: {
    alignSelf: 'center',
    height: 20,
    marginTop: 10,
    width: 20,
  },
  ideal: {
    color: '#238623',
    fontSize: degreeReadout.fontSize,
    textAlign: degreeReadout.textAlign,
  },
  name: {
    fontSize: text.fontSize,
    fontWeight: text.fontWeight,
    textAlign: text.textAlign,
  },
  state: {
    fontSize: text.fontSize,
    fontWeight: text.fontWeight,
    marginBottom: 20,
    textAlign: text.textAlign,
  },
})

export default styles
