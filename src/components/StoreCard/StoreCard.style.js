import React from "react";
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#ebe6e6',
        marginBottom: 0,
    },
    imageContainer:{
        margin : 10,
        marginBottom : 0,
        borderRadius : 10,
        backgroundColor : '#fff',
    },
    image : {
        height: Dimensions.get('window').height/3.5,
        borderRadius: 10,
    },
    contentContainer: {
        margin : 10,
    },
    title : {
        fontSize : 20,
        fontWeight : '600',
        marginTop: 5,
        minHeight : 75,
    },
    price : {
        fontSize : 16,
        color: 'gray',
        marginTop: 5,
    },
    stock : {
        fontSize: 16,
        color: 'red',
        fontWeight: '600'
    }
})