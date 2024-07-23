
import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList,Image } from 'react-native';

const Contacts = () => {
    const contacts=[
        {
            id:"0",
            title:"A",
            data:[
                {id:"0",text:"User 1",img:require('../../assets/images/contact1.jpg')},
                {id:"1",text:"User 2",img:require('../../assets/images/contact5.jpg')},
                {id:"2",text:"User 3",img:require('../../assets/images/contact2.jpg')},
            ]
            },
            {
            id:"1",
            title:"B",
            data:[
                {id:"3",text:"User 1",img:require('../../assets/images/contact3.jpg')},
                {id:"4",text:"User 2",img:require('../../assets/images/contact6.jpg')},
                
            ]
        },
        {
            id:"2",
            title:"C",
            data:[
                {id:"5",text:"User 1",img:require('../../assets/images/contact4.webp')},
                {id:"6",text:"User 2",img:require('../../assets/images/contact5.jpg')},
                {id:"7",text:"User 3",img:require('../../assets/images/contact1.jpg')},
                {id:"8",text:"User 4",img:require('../../assets/images/contact8.png')},
            ]
            },
            {
            id:"3",
            title:"D",
            data:[
                {id:"9",text:"User 1",img:require('../../assets/images/contact2.jpg')},
                {id:"10",text:"User 2",img:require('../../assets/images/contact5.jpg')},
                {id:"11",text:"User 3",img:require('../../assets/images/contact3.jpg')},
            ]
        }
        ];

    return (
        <View style={styles.container}>
            <SectionList sections={contacts}
            renderSectionHeader={({section})=><View style={styles.headerBox}><Text style={styles.header}>{section.title}</Text></View>}
            renderItem={
                ({item})=><View style={styles.contactBox}>
                    <Image style={styles.myImg} source={item.img}></Image>
                    <Text style={styles.contactInfo}>{item.text}</Text>
                    </View>
            }
            >

            </SectionList>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
    },
    header:{
        fontWeight:"bold",
        fontSize:20,
        padding:10,
    },
    headerBox:{
        width:380,
        backgroundColor:"#cccccc",
        marginHorizontal:5
    },
    contactInfo:{
        fontWeight:"bold",
        fontSize:15,
    },
   myImg:{
    width:42,
    height:42,
    borderRadius:50,
    marginRight:10
   },
   contactBox:{
    flexDirection:"row",
    padding:20,
   }
});


export default Contacts;
