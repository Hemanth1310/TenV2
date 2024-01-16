import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,ImageBackground } from 'react-native';
import  MenuBar  from './components/MenuBar';
import Tabs from './components/Tabs'
import Post_container from './components/Post_container';
import ReadingJson from './components/ReadingJson';
import Test from './components/Test'
export default function App() {
  return (
    <>
     <StatusBar style="light"></StatusBar>
    <View style={styles.container}>
   
     
     
      {/* <Tabs></Tabs>
      <ScrollView  style={styles.scrollView} > 
      <Post_container></Post_container>
      </ScrollView> */}
     
      <ImageBackground source={require("./assets/Mesh-Gradient.png")} resizeMode="cover" style={styles.backImage}>
      <ImageBackground source={require("./assets/Noise.png")} resizeMode="cover" style={styles.backImage}>
      <MenuBar ></MenuBar >
      <Tabs></Tabs>
      </ImageBackground>
      </ImageBackground>
      <ImageBackground source={require("./assets/Noise.png")} resizeMode="cover" style={styles.backImage}>
      <ScrollView  style={styles.scrollView} > 
      
      <ReadingJson></ReadingJson>
      </ScrollView>
      </ImageBackground>
      {/* <Test></Test>
      <Text style={styles.text}>Hello</Text> */}
    </View>
   
    </>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    width:"100%",
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'#151515',
    color:'#ffffff',
    // marginTop:28,
    paddingTop:28,
    flexDirection:"column",
    width:"100%",
    paddingBottom:10,
    height:"100%"
  },
  image:{
    height:90,
    width:200
  },
  backImage:{
    height:"auto",
    width:"100%",
    resizeMode: "contain",
    overflow: 'hidden'
    
  },
  Noise:{
    height:"auto",
    width:"100%",
    resizeMode: "contain",
    overflow: 'hidden'
    
  },
  text:{
    color:"#ffffff"
  }
});

