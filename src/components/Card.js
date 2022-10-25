import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {!product.inStock && <Text style={styles.stock}> STOKTA YOK</Text>}
    </View>
  );
};

export default Card;
