import React from "react";
import { Text, StyleSheet} from "react-native";
import {SafeAreaView} from 'react-navigation'
import Header from '../components/Header'
import AlbumList from '../components/AlbumList'

const HomeScreen = () => {
  return (
    <SafeAreaView forceInset={{top: "always"}} style={{flex: 1}}>
      <Header headerText="Albums"/>
      <AlbumList />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

HomeScreen.navigationOptions=()=>{
  return {
  headerShown: false
  }
}

export default HomeScreen;
