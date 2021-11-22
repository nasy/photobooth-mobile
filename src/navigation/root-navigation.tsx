import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoaderScreen from '../screens/loader/loader-screen';

import { Routes } from './routes';
import ListScreen from '../screens/list/list-screen';
import ImageScreen from '../screens/image/image-screen';

interface State {}
interface Props {}
export default class RootNavigator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  componentDidMount(): void {}
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }} 
      initialRouteName={Routes.loader}>
      <Stack.Screen name={Routes.loader} component={LoaderScreen}/>
      <Stack.Screen name={Routes.list} component={ListScreen}/>
      <Stack.Screen name={Routes.view} component={ImageScreen}/>
    </Stack.Navigator>
    );
  }
}
