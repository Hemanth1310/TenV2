import { Text,Image,StyleSheet,View, Pressable } from "react-native";

export default function ReactionsPopUp (props){
    return (
      <View style={styles.box}>
        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
          <Image
              style={styles.image}
              source={require("../assets/Congratulations.png")}
            ></Image>
            <Text style={styles.text}>Congratulations!</Text>
            
          </View>
        </Pressable>
        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
          <Image
              style={styles.image}
              source={require("../assets/Cheers.png")}
            ></Image>
            <Text style={styles.text}>Cheers!</Text>
            
          </View>
        </Pressable>
        

        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
          <Image
              style={styles.image}
              source={require("../assets/Inspiring.png")}
            ></Image>
            <Text style={styles.text}>Inspiring!</Text>
            
          </View>
        </Pressable>

        <Pressable onPress={props.moveOn}>
          <View style={styles.reactions}>
          <Image
              style={styles.image}
              source={require("../assets/Love.png")}
            ></Image>
            <Text style={styles.text}>Love It!</Text>
            
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
        top:-205,
        left:-5,
         height:200,
        width:210,
        backgroundColor:"#034978",
        flexDirection:"column",
        borderRadius:30,
        paddingTop:10
        
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