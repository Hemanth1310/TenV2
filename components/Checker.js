import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet, Button,Pressable,Image } from 'react-native';


function Checker(props){

    if (props.index == props.counter){
        return(
            <Text>Hello</Text>
        )
    }
}

export default Checker