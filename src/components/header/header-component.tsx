import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import { Routes } from '../../navigation/routes';
import { styles } from './header-styles';
import { CompositeNavigationProp, ParamListBase } from '@react-navigation/core';
interface State {}
interface Props {
  navigation: CompositeNavigationProp<any, any>;
  route?: Routes;
}
export class HeaderComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.header}>
        {this.props.route &&
        <TouchableOpacity 
          onPress={() => this.props.navigation.replace(this.props.route)}
          style={styles.backWrap}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>}
      </View>
    );
  }
}