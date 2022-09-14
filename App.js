/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import PageMain from './android/app/src/pages/PageMain';
import fruits from './android/app/src/mocks/fruits';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageMain {...fruits} />
    </SafeAreaView>
  );
};

export default App;
