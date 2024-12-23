import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persister} from './src/reduxtoolkit/store/store';
import MainNav from './src/navigation/MainNav';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
