

import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ImageEntity } from '../../common/models/ImageEntity';
import { ListImageEntity } from '../../common/models/ListImageEntity';
import { ServiceContainer } from '../../common/services/serviceContainer';
import { Routes } from '../../navigation/routes';
import { HeaderComponent } from '../../components/header/header-component';
import { styles } from './image-styles';
import LoaderComponent from '../../components/loader/loader-component';
import ReloadComponent from '../../components/reload/reload-component';

interface Route {
  params: any;
}
interface State {
  imageId: string;
  image: ImageEntity|null;
  loading: boolean;
  loadingError: boolean;
}
interface Props {
  route: Route;
}
export default class ImageScreen extends React.Component<Props, State> {
  public props: any;
  constructor(props: Props){
    super(props);
    this.props = props;
    this.state = {
      imageId: props.route.params.id,
      image: null,
      loading: false,
      loadingError: false
    }
  }
  componentDidMount() { 
    this.load()
  }
  load(): void {
    this.setState({loading: true, loadingError: false})
    ServiceContainer
    .getGetImageService()
    .execute(this.state.imageId)
    .then((image: ListImageEntity) => {
      this.setState({ image: image, loading: false})
    }).catch((e) => {
      this.setState({loading: false, loadingError: true})
    })
  }
  getWindowWidth() : number {
    return Dimensions.get('window').width;
  }
  render() {
    return (
    <View>
      <HeaderComponent 
        navigation={this.props.navigation}
        route={Routes.list}>
      </HeaderComponent>
      {this.state.loading && 
      <LoaderComponent/>}   
      {this.state.loadingError && 
      <ReloadComponent reload={this.load.bind(this)}/>}  
      {this.state.image &&
      <ScrollView style={{ marginTop:70, height: Dimensions.get('window').height }}>
        <Image style={[styles.image, { 
          height:  this.getWindowWidth(), 
          width: this.getWindowWidth(), }]}  
          source={{uri: this.state.image.url }} />
        <Text style={styles.photographer}>{this.state.image.photographer}</Text>
        <Text style={styles.colorText}>
          Primary color
        </Text>
        <View style={[styles.colorLabel, {
          backgroundColor: this.state.image.avgColor
        }]}></View>
     </ScrollView>}
    </View>);
  }
}