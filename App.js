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
      <View style={styles.container}>
        <StatusBar style="light"></StatusBar>
        <ImageBackground
          source={require("./assets/Background.png")}
          resizeMode="cover"
          style={styles.backImage}
        >
          <View style={styles.page}>
            <View style={styles.layout1}>
              <MenuBar></MenuBar>
            </View>
            <View style={styles.layout2}>
              <ScrollView style={styles.scrollView}>
                <Tabs></Tabs>
                <ReadingJson></ReadingJson>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    // width:"100%",
    // flex:1,
    
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'#182848',
    color:'#ffffff',
    // marginTop:28,
    paddingTop:28,
    flexDirection:"column",
    width:"100%",
    // paddingBottom:10,
    height:"100%"
  },
  page:{
    flexDirection:"column",
   
  },
  layout1:{
    marginBottom:10
  },
  layout2:{
    backgroundColor:"#ffffff",
    flex:1,
    // borderRadius:30,
    // borderBottomStartRadius:30,
    borderTopEndRadius:30,
    borderTopStartRadius:30,
    padding:5,
  },
  image:{
    height:90,
    width:200
  },
  backImage:{
    width: null,
    height: null,
    resizeMode: "contain",
    overflow: 'hidden'
    
  },
  text:{
    color:"#ffffff"
  }
});

