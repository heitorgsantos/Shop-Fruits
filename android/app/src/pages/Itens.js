import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Itens = ({titulo, lista}) => {
  return (
    <>
      <Text style={styles.title}>{titulo}</Text>
      {lista.map(list => (
        <View style={styles.card} key={list.nome}>
          <Image style={styles.image} source={list.imagem} />
          <Text style={styles.nome}>{list.nome}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 15,
  },
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
    paddingLeft: 14,
  },
});

export default Itens;
