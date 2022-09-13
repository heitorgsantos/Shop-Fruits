import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../../assets/logo.png';

const Details = () => {
  return (
    <>
      <Text style={styles.cesta}>Cesta de Compras</Text>
      <View style={styles.nameFazenda}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titleFazenda}>Jenny Jack Farm</Text>
      </View>
      <Text style={styles.textDetails}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra
        sua cozinha!
      </Text>
      <Text style={styles.preco}>R$ 40,00</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}>Comprar</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cesta: {
    fontSize: 18,
    lineHeight: 26,
    // fontWeight: 'bold',
    fontFamily: 'Montserrat Bold',
    color: 'black',
    paddingBottom: 8,
  },
  titleFazenda: {
    paddingLeft: 10,
    fontSize: 16,
    lineHeight: 26,
  },
  nameFazenda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
  },
  textDetails: {
    paddingTop: 10,
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },

  textBotao: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Details;
