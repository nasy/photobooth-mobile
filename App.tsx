/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StatusBar,
   View
 } from 'react-native';
 
 import RootNavigation from './src/navigation/root-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 
 const App: () => Node = () => {
   return(
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
    );
 
 };
 export default App;
 