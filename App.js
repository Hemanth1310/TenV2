import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import  MenuBar  from './components/MenuBar';
import Tabs from './components/Tabs'
import Post_container from './components/Post_container';
export default function App() {
  return (
    <>
    <View style={styles.container}>
      <MenuBar ></MenuBar >
      
      <Tabs></Tabs>
      <Post_container></Post_container>

      {/* <StatusBar style="auto" /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'#211C13',
    color:'#ffffff',
    marginTop:28
    //justifyContent: 'center',
  },
  image:{
    height:90,
    width:200
  }
});
