import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../modules/home/container/home.screen';

const MainStack = createStackNavigator({
  Home: Home,
});

const Navigator = createAppContainer(MainStack);

export default Navigator;
