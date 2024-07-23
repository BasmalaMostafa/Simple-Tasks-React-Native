//rnce rnss rnfc


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Box from './Box';

const   ColorBoxes = () => {
  const COLORS=[
    {colorName:'Cyan',hexCode:'#2aa198'},
    {colorName:'Blue',hexCode:'#268bd2'},
    {colorName:'Magenta',hexCode:'#d33682'},
    {colorName:'Orange',hexCode:'#cb4b16'},
    ];

  return (
    <View style={styles.myContainer}>
    <Text style={styles.headerText}>Here are some boxes of different colors</Text>
    { 
      COLORS.map((color)=><Box key={color.hexCode} colorName={color.colorName} hexCode={color.hexCode}></Box>
      )
    }
  </View>
  );
};


const styles = StyleSheet.create({
  myContainer:{
      marginTop:50,
      flex:1,
      backgroundColor:'white',
      marginHorizontal:20
  },
  headerText:{
      fontWeight:"bold",
      fontSize:17,
  },
});

export default ColorBoxes;
