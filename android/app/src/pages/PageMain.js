import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Details from './Details';
import Itens from './Itens';

// import {fonts} from '../../assets/fonts/';

const PageMain = ({itens}) => {
  return (
    <>
      <View style={styles.main}>
        <Details />
      </View>
      <Itens {...itens}/>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  name: {
    color: 'red',
    // fontFamily:fonts.Monteserrat-Bold,
  },
});

export default PageMain;
