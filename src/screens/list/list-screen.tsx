

import { CompositeNavigationProp } from '@react-navigation/core';
import React from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ImageEntity } from '../../common/models/ImageEntity';
import { ListImageEntity } from '../../common/models/ListImageEntity';
import { PaginatedImageList } from '../../common/models/PaginatedImageListEntity';
import { ServiceContainer } from '../../common/services/serviceContainer';
import { HeaderComponent } from '../../components/header/header-component';
import LoaderComponent from '../../components/loader/loader-component';
import ReloadComponent from '../../components/reload/reload-component';
import { Routes } from '../../navigation/routes';
import { styles } from './list-styles';

interface State {
  images: ListImageEntity[];
  perPage: number;
  page: number;
  loading: boolean;
  loadingError: boolean;
  query: string;
  firstLoad: boolean;
}
interface Props {
  navigation: CompositeNavigationProp<any, any>;
}
export default class ListScreen extends React.Component<Props, State> {
  public props: any;
  constructor(props: any){
    super(props);
    this.props = props;
    this.state = {
      images: [],
      perPage: 50,
      page: 1,
      loading: false,
      loadingError: false,
      query: 'nature',
      firstLoad: true
    }
  }
  componentDidMount() { 
    this.load()
  }
  load(): void {+
    this.setState({ loading: true, loadingError: false });
    ServiceContainer
    .getGetImagesService()
    .execute(this.state.query, this.state.page, this.state.perPage)
    .then((list: PaginatedImageList) => {
      this.setState({images: this.state.images.concat(list.images), loading: false, firstLoad: false})
    }).catch((e) => {
      this.setState({loading: false, loadingError: true})
    })
  }
  next() : void {
    let page = this.state.page + 1;
    this.setState({ page: page }, () => this.load())
  }
  viewImage(image: ImageEntity): void {
    this.props.navigation.replace(Routes.view, {id: image.id})
  }
  getWindowWidth() : number {
    let dim = Dimensions.get('window');
    return dim.width;
  }
  render() {
    return (
    <View style={{}}>
      <HeaderComponent
        navigation={this.props.navigation}>
      </HeaderComponent>
      <View style={styles.content}>
      <FlatList
          ListHeaderComponent={() => { 
            return(
            <View style={{ marginBottom: 0 }}>
                {this.state.firstLoad && 
                <LoaderComponent/>}  
                {this.state.loadingError && 
                <ReloadComponent reload={this.load.bind(this)}/>}  
                {!this.state.loadingError 
                && !this.state.loading 
                && this.state.images.length == 0 &&
                <View>
                  <View style={styles.noResults}>
                    <Text style={styles.noResultsText}>No images added yet</Text>
                  </View>
                </View>}
            </View>);
          }}
          contentContainerStyle={{ paddingBottom: 140}}
          refreshing={this.state.loading}
          onEndReached={() => this.next()}
          onRefresh={() => this.load()}
          data={this.state.images}
          numColumns={3}
          onEndReachedThreshold={1}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              onPress={() => this.viewImage(item)}  
              style={styles.item}>
                <Image style={[styles.image, { 
                  height:  this.getWindowWidth() / 3, 
                  width: this.getWindowWidth() / 3 }]}  
                  source={{uri: item.url }} />
            </TouchableOpacity>
          )}
          keyExtractor={(image: ImageEntity) => image.id}
        />    
     </View>
    </View>);
  }
}