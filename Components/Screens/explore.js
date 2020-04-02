import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from '../Categories/category';

export default class Explore extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <View style={Styles.searchSection}>
            <Icon style={Styles.searchIcon} name="search" size={20} color="#000"/>
            <TextInput
                style={Styles.input}
                placeholder="Search.."
                underlineColorAndroid="transparent"
            />
            <Icon style={Styles.searchIcon} name="close" size={20} color="#000"/>
          </View>
          <View style={{flex:1, height: 150, marginTop: 10 }}>
            <ScrollView horizontal={true} 
              showsHorizontalScrollIndicator={false}  
              style={Styles.scrollStyle}>
              <Category
                imageUri={require("../../Assests/car.png")}
                name="Home"
              />
              <Category
                imageUri={require("../../Assests/car.png")}
                name="Experiences"
              />
              <Category
                imageUri={require("../../Assests/car.png")}
                name="Resturant"
              />
            </ScrollView>
          </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  scrollStyle:{
    backgroundColor:'#57606f',
  },
  container:{
    flex:1,
    height:180,
    backgroundColor:'#84817a'
  },
  searchSection: {
    marginHorizontal:20,
    margin:20,
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa69d',
  },
  searchIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      borderRadius:10,
      textAlign:'center',
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      backgroundColor: '#aaa69d',
      color: '#424242',
  }
})