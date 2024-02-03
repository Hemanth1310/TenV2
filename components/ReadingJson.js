import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet, Button,Pressable,Image, Modal, ToastAndroid,Alert } from 'react-native';
// import Checker from './Checker';
import Post_Fetch from './Post_Fetch';
import { LinearGradient } from 'expo-linear-gradient';
import NotInterested from './NotInterested';
import ReactionsPopUp from './ReactionPopUp';
import { ReactionContainer } from './ReactionContainer';
import { IgnoreComponent } from './IgnoreComponent';


const ReadingJson = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [couter,setCounter] = useState([0]);
    const [store,setStore] =useState([0]);

    getUsers = () => {
        fetch('https://tenjson-cd580-default-rtdb.europe-west1.firebasedatabase.app/user.json')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    useEffect(() => {
        if(store<5 && store!=0){
        ToastAndroid.show(`You have ${5-store} skips left`, ToastAndroid.SHORT);
        }
    }, [store]);
    const deadend = () =>{
        Alert.alert('You’ve exhausted your skips!')
    }

    function onNext(index) {
      setCounter(index);
    //   setReactComponent(!reactComponent)
    }


    function ignoreIt(index){
        setCounter(index)
    }

    function storeCount(){
        let x=parseInt(store)
        // console.log(`pretest ${x}`)
        x++;
        // console.log(`test ${x}`)
        if(x==5){
            x=0;
            setStore(x);
            deadend();

        }else{
            setStore(x)
        }
    }


    const skipable = () =>{
        return (
          <View style={styles.skips}>
            <Text style={styles.skipText}>
              {skipMessage}
            </Text>
          </View>
        );
    }

    const showAlert = () =>
  Alert.alert(
    'Please Note',
    'This function is disabled at the moment',
    [
      {
        text: 'Cancel',
        // onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    //   onDismiss: () =>
    //     Alert.alert(
    //       'This alert was dismissed by tapping outside of the alert dialog.',
    //     ),
    },
  );


    
    return (
      <View>
        <View style={styles.container} key={Math.random().toString()}>
          {/* {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={users}
                    
                    renderItem={({ item }) => <Text>{item.userName}  </Text>}
                />
                
                
            )} */}

          {users.map((data, index) => (
            <View style={styles.postdescription} key={Math.random().toString()}>
              {couter == index ? (
                <View style={styles.postcard}>
                  <View style={styles.poset_section}>
                    <Post_Fetch
                      userName={data.userName}
                      date={data.posts[0].date}
                      propic={data.profilePicture}
                      title={data.posts[0].title}
                      description={data.posts[0].postDrescription}
                      postImage={data.posts[0].postImage}
                      tag={data.posts[0].category}
                      onNext={onNext}
                      unfo={showAlert}
                    ></Post_Fetch>
                  </View>
                  <View style={styles.expandDiv}>
                    <View style={styles.savelater}>
                      <Pressable onPress={showAlert}>
                        <View style={styles.saveSection}>
                          <Image
                            style={styles.fakesave}
                            source={require("../assets/FakeSave.png")}
                          ></Image>
                        </View>
                      </Pressable>
                      <Pressable onPress={showAlert}>
                        <View style={styles.fakeReportSection}>
                          <Image
                            style={styles.fakereport}
                            source={require("../assets/Report.png")}
                          ></Image>
                        </View>
                      </Pressable>
                    </View>
                    <View style={styles.bottomtabs}>
                      <View style={styles.interested}>
                        <View style={{ position: "relative" }}>
                          {/* <Pressable onPress={() => onNext(index + 1)}> */}

                          {/* { reactComponent == true ?(
                         <View style={styles.outer}>
                            {boxer}
                          </View>):null
                            } */}
                          <ReactionContainer
                            nextPost={() => onNext(index + 1)}
                          ></ReactionContainer>
                        </View>
                        <Pressable onPress={showAlert}>
                          <Image
                            style={styles.reactions}
                            source={require("../assets/FakeComments.png")}
                          ></Image>
                        </Pressable>
                      </View>
                      <View style={styles.notinterested}>
                        <View></View>
                        <IgnoreComponent onIgnore={() => ignoreIt(index + 1) } updateCount={storeCount} countStore={store}></IgnoreComponent>
                        {/* <NotInterested></NotInterested> */}
                        {/* <View>
                          <Pressable
                            onPress={() => onNotinterested(index + 1, store)}
                          >
                            <View style={styles.ignore}>
                              <NotInterested></NotInterested>
                            </View>
                          </Pressable>
                        </View> */}
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
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
    outer:{
        position:"absolute",
        top:-100,
        height:100,
        width:100,
        backgroundColor:"red",
     },
     box:{
        height:100,
        width:100,
        backgroundColor:"red",
       
     },
  container: {
    flex: 1,
    //  alignItems:"center",
    // color:"#182848",
    // justifyContent:"center",
    flexDirection: "column",
    paddingTop: 10,
    // backgroundColor:'#ffffff'
  },
  postdescription: {
    // paddingRight:10,
    // paddingLeft:10,
    // marginBottom:10
  },
  
  postcard: {
    flexDirection: "column",

    // justifyContent:"flex-end",
  },
  savelater: {
    // height:"90%",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    marginBottom:10,
  },
  saveSection: {
    marginHorizontal: 10,
  },
  fakesave: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    // marginLeft:10
  },
  fakeReportSection: {
    marginHorizontal: 10,
  },
  fakereport: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  reactions: {
    height: 52,
    width: 52,
    resizeMode: "contain",
  },
  poset_section: {},
  expandDiv: {
    // flexDirection:"column",
    justifyContent: "flex-end",
    // borderWidth:2,
    // height:120,
  },
  bottomtabs: {
    // flex:1,
    // borderWidth:2,
    height: 60,
    width: "100%",
    // padding:10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-between",
    // backgroundColor:"linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%);",
  },
  interested: {
    flex: 1,
    // borderWidth:2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center"
    // paddingLeft:10,
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

});

export default ReadingJson