import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './reload-styles';
interface State {}
interface Props {
  reload: Function;
}
export default class ReloadComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}

  getWindowHeight() : number {
    let dim = Dimensions.get('window');
    return dim.height;
  }
  render() {
    return (
      <View style={[styles.content, {
        height: this.getWindowHeight()/2
      }]}> 
        <TouchableOpacity
          onPress={() => this.props.reload()}  
          style={styles.buttonWrap}>
          <Text style={styles.buttonText}>
            Reload
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}