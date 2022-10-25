import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import product_data from './product_data.json';
import Card from './components/Card';

const App = () => {
  const [text, onChangeText] = React.useState(null);
  const renderProduct = ({item}) => <Card product={item} />;
  const keyFinder = item => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
      />
      <FlatList
        keyExtractor={keyFinder}
        data={product_data}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#eceff1',
    paddingTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    paddingTop: 5,
    color: 'purple',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
});

export default App;
