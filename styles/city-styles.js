import { StyleSheet } from 'react-native';

const degreeReadout = {
  fontSize: 24,
}

const styles = StyleSheet.create({
  chilly: {
    color: '#2E7CC7',
    fontSize: degreeReadout.fontSize,
  },
  cold: {
    color: '#180FC1',
    fontSize: degreeReadout.fontSize,
  },
  container: {
    borderColor: 'rgb(44, 57, 58)',
    borderRadius: 3,
    borderWidth: 1,
    marginRight: 20,
    padding: 10,
  },
  hot: {
    color: '#EB2C08',
    fontSize: degreeReadout.fontSize,
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
  },
})

export default styles
