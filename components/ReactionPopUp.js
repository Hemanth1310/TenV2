import { Text,Image,StyleSheet,View, Pressable } from "react-native";

export default function ReactionsPopUp (props){
    return (
      <View style={styles.box}>
        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
            <Text style={styles.text}>Awesome!</Text>
            <Image
              style={styles.image}
              source={require("../assets/smile-white.png")}
            ></Image>
          </View>
        </Pressable>
        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
            <Text style={styles.text}>Congratulations!</Text>
            <Image
              style={styles.image}
              source={require("../assets/smile-white.png")}
            ></Image>
          </View>
        </Pressable>

        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
            <Text style={styles.text}>Keep it up!</Text>
            <Image
              style={styles.image}
              source={require("../assets/smile-white.png")}
            ></Image>
          </View>
        </Pressable>

        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
            <Text style={styles.text}>Amazing!</Text>
            <Image
              style={styles.image}
              source={require("../assets/smile-white.png")}
            ></Image>
          </View>
        </Pressable>
      </View>
    );
}


const styles = StyleSheet.create({

    outer:{
       borderWidth:2,
      borderColor:"blue",
       height:120,
      width:120,
    },
    box:{
        position:"absolute",
        top:-200,
         height:200,
        width:210,
        backgroundColor:"#4B6CB7",
        flexDirection:"column",
        borderRadius:30,
        
    },
    reactions:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15,
        justifyContent:"space-between",
        // marginBottom:10,
        padding:10,
        // borderWidth:2,
        // borderColor:"#ffffff"
    },
    image:{
        height:25,
        width:25,
        resizeMode:"contain"
    },
    text:{
        fontSize:16,
        color:"#ffffff"
        //  paddingHorizontal:15,
    }

  });