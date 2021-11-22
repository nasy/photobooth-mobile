import LottieView from 'lottie-react-native';
import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { styles } from './loader-styles';
interface State {}
interface Props {}
export default class LoaderComponent extends Component<Props, State> {
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
      <LottieView style={styles.animation} 
      source={require('../../assets/animations/loading.json')} autoPlay loop />
      </View>
    );
  }
}