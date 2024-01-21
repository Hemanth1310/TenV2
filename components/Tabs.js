import { StyleSheet,Text,Button,View,Pressable,Image,Alert } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

function Tabs(){

    const [fontsLoaded] = useFonts({
        'Raleway-VariableFont': require('../assets/fonts/Raleway-semibold.ttf'),
        'Raleway-VariableFont-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

      const showAlert = () =>
        Alert.alert(
          "Please Note",
          "This function is disabled at the moment",
          [
            {
              text: "Cancel",

              style: "cancel",
            },
          ],
          {
            cancelable: true,
          }
        );

    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.followtab}>
            <Pressable >
              {/* <Text style={styles.following_btn}>Following</Text> */}
              <Text style={styles.textFollow}>Following</Text>
            </Pressable>
          </View>
          <View style={styles.discovertab}>
            <Pressable onPress={showAlert}>
              {/* <Text style={styles.following_btn}>Following</Text> */}
              <Text style={styles.textDiscover}>Discover</Text>
            </Pressable>
          </View>

          <View></View>

          {/* <Button title="Following"></Button>
            <Button title="Discover"></Button> */}
          {/* <Pressable >
                <Text style={styles.following_btn}>Discover</Text>
            </Pressable> */}
        </View>
        <View style={styles.search}>
            <Pressable onPress={showAlert}>
          <Image
            style={styles.icon}
            source={require("../assets/finder.png")}
          ></Image>
          </Pressable>
        </View>
        {/* 
            <View style={styles.newpost}>
            <Image style={styles.icon2} source={require('../assets/bell.png')}></Image>
            </View> */}
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
       
        height:64,
        // width:"100%",
        marginBottom:10,
        // marginTop:10,
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"space-between",
        paddingHorizontal:5,
        
    },
    following_btn:{
        color:"#000000",
        fontSize:18,
        borderColor:"#000000",
        borderBottomWidth:2,
        padding:10,
        width:177,
        borderRadius:8,
        justifyContent:"center"
    },
    followtab:{
        alignItems:"center",
        flex:1,
        backgroundColor:"#182848",
        height:45,
        borderRadius:30,
        justifyContent:"center"
    },
    textFollow:{
        color:"#ffffff",
        // fontSize:16
        fontSize:16,
        fontFamily:"Inter-Regular"
    },
    discovertab:{
        alignItems:"center",
        flex:1,
        // backgroundColor:"#182848",
        height:45,
        borderRadius:30,
        justifyContent:"center"
    },
    textDiscover:{
        color:"#2E3B4C",
        fontSize:16,
        fontFamily:"Inter-Regular"
    },
    nav:{
        flex:5,
        backgroundColor:"#F1F7FF",
        borderRadius:30,
        height:45,
        flexDirection:"row",
        alignItems:"center"
    },
    search:{
        height:60,
        width:60,
        overflow:"hidden",
        flex:1
    },
    icon:{
        height:45,
        width:45,
        resizeMode:"contain"
    }

});

export default Tabs