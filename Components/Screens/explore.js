import React, { Component } from "react";
import { View, Image, StyleSheet, Text, ScrollView, TextInput, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Explore extends Component {
  render() {
    return (
      <ScrollView >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.searchbarView}>
            <View style={styles.searchView}>
              <Icon name="search" size={20} style={{ margin: 20 }} />
              <TextInput 
              underlineColorAndroid="transparent"
              placeholder="Search..."
              placeholderTextColor="grey"
              style={styles.searchtextView}/>
              <Icon name="close" size={20} style={styles.closeIcon}/>
            </View>
          </View>
        </SafeAreaView>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
          <Text style={{fontSize: 24,fontWeight: "700",paddingHorizontal: 20}}>
            What can we help you find, Dark Lord?
          </Text>
          <View
            style={{
              height: 130,
              width: 130,
              marginLeft: 20,
              borderWidth: 0.5,
              borderColor: "#dddddd"
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={require('../../Assests/car.png')}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover"
                }}
              />
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
              <Text>Cars</Text>
            </View>
          </View>
        </View>
    </ScrollView>
    );
  }
}
const styles= StyleSheet.create({
  searchbarView: {
    backgroundColor: "#3c6382",
    height: 80,
  },
  searchView:{
    borderRadius:20,
    flexDirection: "row",
    marginTop:10,
    backgroundColor: "#0a3d62",
    marginHorizontal: 10,
  },
  searchtextView: {
    flex: 1,
    borderRadius:30,
    fontWeight: "700", 
    backgroundColor: "#0a3d62"
  },
  closeIcon:{
    flexDirection:'row',
    margin:20,
  }
})