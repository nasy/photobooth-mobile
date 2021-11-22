

import React from 'react';
import { View } from 'react-native';
import LoaderComponent from '../../components/loader/loader-component';
import { Routes } from '../../navigation/routes';
import { styles } from './loader-styles';


interface State {
  loading: boolean;
  loadingError: boolean;
}
interface Props {
  navigation: any;
}
export default class LoaderScreen extends React.Component<Props, State> {
  public props: any;
  constructor(props: any){
    super(props);
    this.props = props;
    this.state = {
      loading: false,
      loadingError: false,
    }
  }
  componentDidMount() { this.load()}
  load(): void {
    setTimeout(() => this.props.navigation.replace(Routes.list, {}), 2000)
  } 
  render() {
    return (
    <View style={styles.loader}>
     <LoaderComponent/>
    </View>);
  }
}