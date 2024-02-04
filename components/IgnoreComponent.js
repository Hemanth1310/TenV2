import { StyleSheet,View,Text,Image,Pressable,ToastAndroid,Alert } from "react-native";
import React,{useEffect,useState} from 'react'
import NotInterested from "./NotInterested";

export const IgnoreComponent =(props) =>{

    const [store,setStore] = useState([1]);
    const [counter,setCounter] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);
   
    const [skipVisible,setSkipVisible]=useState(false);
    const [skipMessage,setSkipMessage]=useState([]);

    const deadend = () =>{
        Alert.alert('You’ve exhausted your skips!')
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));
    // useEffect(() => console.log("re-render because x changed:", counter), [counter])
   async function onNotinterested(){
        
        let x= parseInt(props.countStore)        
        // console.log(`${x}`)
        // setSkipMessage(`You have ${4-x} skips left`)
        // setSkipVisible(true)
        
        // await delay(2000)
        // setSkipVisible(false)
        props.updateCount()
        // console.log(`store=${counter}`)
        props.onIgnore()
    }
        return (
          <View style={styles.contain}>
            {/* {skipVisible == true ? (
              <View style={styles.skips}>
                <Text style={styles.skipText}>{skipMessage}</Text>
              </View>
            ) : null} */}
                        <Pressable
                          onPress={()=>onNotinterested()}
                        >
                          <View style={styles.ignore}>
                            <NotInterested></NotInterested>
                          </View>
                        </Pressable>
          </View>
        );


}

const styles= StyleSheet.create({
    contain:{
        // backgroundColor:"red"
    },
    skips:{
        position:"absolute",
        height:45,
        width:"100%",
        backgroundColor:"#4B6CB7",
        zIndex:100,
        top:500,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30
    },
    skipText:{
        fontSize:16,
        color:"#ffffff"
    },
    ignore: {
        backgroundColor: "#182848",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
      },
      notinterested: {
        flex: 1,
        alignItems: "flex-end",
        padding: 10,
      },
})