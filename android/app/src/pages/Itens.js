import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Itens = ({titulo, lista}) => {
  return (
    <>
      <Text style={styles.title}>{titulo}</Text>
      {lista.map(({nome, imagem}) => {
        return (
          <View style={styles.card} key={nome}>
            <Image style={styles.image} source={imagem} />
            <Text style={styles.nome}>{nome}</Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 18,
    paddingVertical: 15,
    fontSize: 16,
    lineHeight: 26,
    color: "#464646",
    // fontWeight:'bold',
    fontFamily:"Montserrat Bolds"
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
    paddingLeft: 12,
    paddingBottom: 10,
  },
});

export default Itens;
