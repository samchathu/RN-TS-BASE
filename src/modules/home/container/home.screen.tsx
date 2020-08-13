import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

import defaultStyles from '../../../shared/styles/styles';
import styles from './home.styles';

const {flexDirectionRow, flex1} = defaultStyles;
const {container} = styles;

export interface Props {}

interface State {}

class Home extends Component<Props, State> {
  render() {
    return (
      <SafeAreaView style={[flex1, flexDirectionRow, container]}>
        <Text>Home Page</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
