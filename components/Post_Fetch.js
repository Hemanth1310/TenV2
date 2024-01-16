import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

function Post_Fetch(props) {
    const [fontsLoaded] = useFonts({
        'Raleway-VariableFont': require('../assets/fonts/Raleway-semibold.ttf'),
        'Raleway-VariableFont-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.userinfo}>
        <View style={styles.profilepic}>
          <Image style={styles.image} source={{ uri: props.propic }}></Image>
        </View>
        <View style={styles.namendate}>
          <Text style={styles.username}>{props.userName}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
        <View style={styles.actions}>
          <Pressable>
            <Text style={styles.unfollow}>Unfollow</Text>
          </Pressable>
          <Image source={require("../assets/3dots.png")}></Image>
        </View>
      </View>

      <View style={styles.postdescription}>
        <View style={styles.postimage}>
          <Image
            style={styles.postpic}
            source={{ uri: props.postImage }}
          ></Image>
        </View>
        <Text style={styles.postTitle}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        // alignItems:"center"
    },
    userinfo:{
        height:60,
        width:"100%",
        
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        marginBottom:30,
        paddingHorizontal:15
        
    },
    profilepic:{
        width:60,
        height:60,
        // borderWidth:2,
        flexDirection:"row",
        marginHorizontal:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden'

    },
    namendate:{
        justifyContent:"center",
        width:"45%",
    },
    username:{
        fontSize:16,
        color:"#ffffff",
        fontFamily:"Raleway-VariableFont-Bold",
        // marginHorizontal:10,
        
    },
    date:{
        fontSize:14,
        color:"#929899",

    },
    actions:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
       
    },
    unfollow:{
        color:"#ffffff",
        marginHorizontal:30,
        fontFamily:"Raleway-VariableFont-Bold",
    },
    postpic:{
     
        
        height: 248,
        resizeMode:'contain',
        width:"100%"
        
    },
    image:{
        height:60,
        width:60,
        
        

      },
    makepost:{
        marginLeft:20
    },
    postimage:{
        marginBottom:20,
    },
    postdescription:{

        paddingRight:10,
        paddingLeft:10,
        marginBottom:10
    },
    postTitle:{
        fontSize:16,
        // fontWeight: 'bold',
        color:"#ffffff",
        marginBottom:10,
        fontFamily:"Raleway-VariableFont-Bold",
        paddingHorizontal:10,
      
    },
    description:{
        color:"#ffffff",
        fontSize:14,
        textAlign:"justify",
        paddingHorizontal:10,
        fontFamily:"Raleway-VariableFont"
    },
    
    expand:{
        height:30
    },
    expandDiv:{
        borderWidth:2,
        height:60,
        width:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#CED704",
        borderRadius:30,
    },
    
})


export default Post_Fetch