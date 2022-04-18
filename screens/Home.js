import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native"; // FlatList is recycler view, SafeArea renders content in safe area boundary to make sure things fit on the screen, View is a div

import { COLORS, ProductData } from "../constants";
import { ProductCard, HomeHeader, FocusedStatusBar } from "../components";

// SafeAreaView is like the outer div
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={ProductData}
            renderItem={({ item }) => <ProductCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
