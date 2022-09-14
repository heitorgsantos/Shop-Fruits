import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Details from './Details';
import Item from './Item';
import Topo from './Topo';

// import {fonts} from '../../assets/fonts/';

const PageMain = ({itens}) => {
  return (
    <>
      {/* {console.log(itens.lista)} */}
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo />
              <View style={styles.main}>
                <Details />
                <Text style={styles.title}>{itens.titulo}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 15,
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
    fontWeight: 'bold',
    fontFamily: 'Montserrat Bolds',
  },
  main: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  name: {
    color: 'red',
    // fontFamily:fonts.Monteserrat-Bold,
  },
});

export default PageMain;
