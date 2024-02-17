import {  StyleSheet, Text, View, Image, Pressable,Alert } from "react-native";

function MenuBar(){

    const showAlert = () =>
  Alert.alert(
    'Please Note',
    'This function is disabled at the moment',
    [
      {
        text: 'Cancel',
        
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
   
    },
  );
    
    return (
      <View style={styles.container}>
        <View style={styles.p1}>
        <View style={styles.burgersection}>
          <Pressable onPress={showAlert}>
            <Image
              style={styles.icon1}
              source={require("../assets/FakeBurgerMenu.png")}
            ></Image>
          </Pressable>
        </View>
        <View style={styles.appname}>
          <Pressable onPress={showAlert}>
            <Text style={styles.textappname}>TEN</Text>
          </Pressable>
        </View>
        </View>
        {/* <View style={styles.p2}>
        <View style={styles.finder}>
          <Pressable onPress={showAlert}>
            <Image
              style={styles.icon}
              source={require("../assets/finder14.png")}
            ></Image>
          </Pressable>
        </View>
        <View style={styles.newpost}>
          <Pressable onPress={showAlert}>
            <Image
              style={styles.icon1}
              source={require("../assets/pluspost.png")}
            ></Image>
          </Pressable>
        </View>
        <View style={styles.newpost}>
          <Pressable onPress={showAlert}>
            <Image
              style={styles.icon2}
              source={require("../assets/bell.png")}
            ></Image>
          </Pressable>
        </View>
        </View> */}
      </View>
    );
}


const styles = StyleSheet.create({
    container:{
        height:64,
        // width:"100%",
        
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        marginBottom:"30"
    },
    p1:{
        flex:1,
        flexDirection:"row"
    },
    appname:{
        fontSize:22,
        color:"#ffffff",
        marginHorizontal:10,
        // width:"53%"
    },
    textappname:{
        fontSize:22,
        color:"#ffffff",
    },
    burgersection:{
        width:30,
        height:30,
        // borderWidth:2,
        flexDirection:"row",
        // marginHorizontal:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden',
        alignItems:"center",
        justifyContent:"center",
        // paddingHorizontal:20
        paddingTop:3,
    },
    burgermenu:{
        height:30,
        width:30,   
        resizeMode:"contain"
    },

    p2:{
        flex:1,
        flexDirection:"row"
    },
    finder:{
        width:60,
        height:60,
        // borderWidth:2,
        flexDirection:"row",
        // marginHorizontal:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden',
        alignItems:"center",
        paddingHorizontal:20
    },
    icon:{
        height:30,
        width:30,
        // resizeMode:"contain"
    },
    newpost:{
        width:60,
        height:60,
        // borderWidth:2,
        flexDirection:"row",
        // marginHorizontal:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden',
        alignItems:"center",
        paddingHorizontal:20
    },
   
    icon1:{
        height:30,
        width:30,    

      },
      notifications:{
        width:80,
        height:60,
        // borderWidth:2,
        flexDirection:"row",
        // marginHorizontal:10.,
        marginRight:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden',
        alignItems:"center",
        justifyContent:"center"
      },
      icon2:{
        height:20,
        width:20,
      }


})


export default MenuBar