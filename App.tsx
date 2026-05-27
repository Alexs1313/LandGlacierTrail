import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LandGllacrtraillMainRoutesStack} from './LandGllacrtraill/landGllacrtraillroutts/LandGllacrtraillMainRoutesStack';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <LandGllacrtraillMainRoutesStack />
    </GestureHandlerRootView>
  );
}

export default App;
