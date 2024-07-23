
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Box = ({colorName,hexCode}) => {
    return (
        <View style={[styles.colorBox,{backgroundColor:hexCode}]}>
        <Text style={styles.textBox}>{colorName} {hexCode}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    colorBox:{
        marginVertical:7
    },
    textBox:{
        color:"white",
        paddingVertical:10,
        textAlign:"center",
        fontWeight:"bold"
    }
});

export default Box;
