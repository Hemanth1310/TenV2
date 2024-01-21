import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function NotInterested (){
    const [fontsLoaded] = useFonts({
        'Raleway-VariableFont': require('../assets/fonts/Raleway-semibold.ttf'),
        'Raleway-VariableFont-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Avenir-Bold': require('../assets/fonts/Avenir-Heavy.ttf'),
        'Avenir-Regular': require('../assets/fonts/Avenir-Regular.ttf'),
        'Avenir-Light': require('../assets/fonts/Avenir-Light.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View onLayout={onLayoutRootView}>
       <Text style={styles.noIntrestText}>
                            Not Interesting
                          </Text>
        </View>
    )
}


const styles = StyleSheet.create({
  noIntrestText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "Avenir-Regular",
  },
});