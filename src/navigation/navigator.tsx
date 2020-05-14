import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createTabNavigator} from 'react-navigation-tabs';
import * as SCENES from './NavigationRoute.const';

import Home from '../modules/home/container/screens/home.screen';

const MainStack = createStackNavigator({
  Home: Home,
});

const Navigator = createAppContainer(MainStack);

export default Navigator;
