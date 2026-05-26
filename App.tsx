import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MainRoutesStack} from './src/navigation/MainRoutesStack';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainRoutesStack />
    </GestureHandlerRootView>
  );
}

export default App;
