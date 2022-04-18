import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native"; // FlatList is recycler view, SafeArea renders content in safe area boundary to make sure things fit on the screen, View is a div

import { COLORS, NFTData } from '../constants'
import { ProductCard, HomeHeader, FocusedStatusBar } from "../components";

// SafeAreaView is like the outer div
const Home = () => {
  return (
      <SafeAreaView style = {{flex:1}}> 
        
      </SafeAreaView>
  )
};

export default Home;
