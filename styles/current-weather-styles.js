import { StyleSheet } from 'react-native';

const degreeReadout = {
  fontSize: 32,
};

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
    alignItems: 'center',
    marginTop: 30,
  },
  headline: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  hot: {
    color: '#EB2C08',
    fontSize: degreeReadout.fontSize,
  },
  ideal: {
    color: '#238623',
    fontSize: degreeReadout.fontSize,
  },
});

export default styles;
