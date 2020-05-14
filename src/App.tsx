import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './store';
import AppNavigator from './navigation/navigator';
import navigationService from './navigation/navigationService';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <AppNavigator
            ref={navigationRef => {
              navigationService.setTopLevelNavigator(navigationRef);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
