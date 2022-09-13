import React from 'react';

import {Dimensions, Image, View, StyleSheet, Text} from 'react-native';

import topo from '../../assets/topo.png';

const widht = Dimensions.get('screen').width;

const Topo = () => {
  return (
    <View style={styles.cesta}>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.title}>Detalhes da Cesta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * widht,
  },
  title: {
    width: "100%",
    position: 'absolute',
    color: "white",
    fontSize:16,
    lineHeight:26,
    paddingTop: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat Black',
    // fontWeight: 'bold',
  }
});

export default Topo;
