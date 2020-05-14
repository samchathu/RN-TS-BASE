import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

export interface Props {}

interface State {}

class Home extends Component<Props, State> {
  render() {
    return (
      <SafeAreaView>
        <Text>Home Page</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
