import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  price: {
    fontSize: 18,
    padding: 5,
  },
  stock: {
    color: 'red',
    fontSize: 19,
    fontWeight: 'bold',
    padding: 5,
  },
});
