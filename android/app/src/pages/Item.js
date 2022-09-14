import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Item = ({item: {nome, imagem}}) => {
  console.log(nome,'aqui', imagem)
  return (
    <View style={styles.card}>
      <Image source={imagem} style={styles.image} />
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    margin: 5,
  },
  nome: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
  card: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingBottom: 10,
  },
});

export default Item;
