/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, View} from 'react-native';
import PageMain from './android/app/src/pages/PageMain';
import Topo from './android/app/src/pages/Topo';
import fruits from "./android/app/src/mocks/fruits";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <ScrollView>
      <View>
        <Topo />
        <PageMain {...fruits}/>
      </View>
    </ScrollView>
  );
};

export default App;
