import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginTop:10,
          marginLeft: 20,
          borderWidth: 0.5,
          borderRadius:50,
          borderTopEndRadius:50,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}