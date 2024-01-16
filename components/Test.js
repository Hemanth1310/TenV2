import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Raleway-VariableFont': require('../assets/fonts/Raleway-semibold.ttf'),
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
      <Text style={{ fontFamily: 'Raleway-VariableFont', fontSize: 30,color:"#ffffff", }}>Joshua Grey</Text>
      <Text style={{ fontSize: 30 ,color:"#ffffff"}}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       
        height:64,
        width:"100%",
        marginBottom:10,
        
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"space-between",
        paddingHorizontal:5,
        
    },
    following_btn:{
        color:"#ffffff",
        fontSize:18,
        borderColor:"#ffffff",
        borderWidth:2,
        padding:10,
        width:177,
        borderRadius:8,
        justifyContent:"center"
    }

});