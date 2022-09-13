import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import logo from '../../assets/logo.png';

const Details = () => {
  return (
    <>
      <Text style={styles.cesta}>Cesta de Compras</Text>
      <View style={styles.nameFazenda}>
        <Image source={logo} style={styles.imageDetails} />
        <Text>Jenny Jack Farm</Text>
      </View>
      <Text style={styles.textDetails}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra
        sua cozinha!
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  cesta: {
    fontSize: 16,
    lineHeight: 26,
    color: 'black',
    paddingBottom: 8,
  },
  nameFazenda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageDetails: {
    width: 32,
    height: 32,
  },
  textDetails: {
    paddingTop:10
  },
});

export default Details;
