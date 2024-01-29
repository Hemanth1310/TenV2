import { StyleSheet,View,Text,Image,Pressable } from "react-native";
import React,{useEffect,useState} from 'react' ;
import ReactionsPopUp from "./ReactionPopUp";

export const ReactionContainer =(props)=>{
  const [reactComponent, setReactComponent] = useState(false);

  const boxView = () => {
    // console.log("clicked")
    setReactComponent(!reactComponent);
  };

  const route = () => {
    // console.log("clicked")
    setReactComponent(!reactComponent);
    props.nextPost();
  };

  return (
    <View>
      {reactComponent == true ? (
        <ReactionsPopUp moveOn={route}></ReactionsPopUp>
      ) : null}

      <Pressable onPress={boxView}>
        <Image
          style={styles.reactions}
          source={require("../assets/FakeSmile.png")}
        ></Image>
      </Pressable>
    </View>
  );
} 

const styles= StyleSheet.create({
    reactions: {
        height: 52,
        width: 52,
        resizeMode: "contain",
      },
})