/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import PageA from './src/components/pageA';
import PageB from './src/components/pageB';
import Login from './src/components/login';

export default class RNBaseMapsRouterSample extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} initial hideNavBar />
          <Scene key="pageA" component={PageA} />
          <Scene key="pageB" component={PageB} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('RNBaseMapsRouterSample', () => RNBaseMapsRouterSample);
