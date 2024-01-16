import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet, Button,Pressable,Image } from 'react-native';
// import Checker from './Checker';
import Post_Fetch from './Post_Fetch';
import { LinearGradient } from 'expo-linear-gradient';

const ReadingJson = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [couter,setCounter] = useState([0]);
    

    getUsers = () => {
        fetch('https://tenv1-44bcb-default-rtdb.firebaseio.com/user.json')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);

    function onNext(index) {
      setCounter(index);
    }

    // function onNext(){
    //     console.log("im here now");
    // }
    
    return (
      <View>
        {/* <Text> {users[0].userName}</Text> */}
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
                    onNext={onNext}
                    
                  ></Post_Fetch>
                  </View>
                  <View style={styles.expandDiv}>
                    <View style={styles.savelater}>
                      <Pressable >
                        {/* <Text>Checker</Text> */}
                      </Pressable>
                    </View>
                    <View style={styles.bottomtabs}>
                      <View style={styles.interested}>  
                      <Pressable onPress={() => onNext(index + 1)}>
                        <Image
                          style={styles.reactions}
                          source={require("../assets/smiley3.png")}
                        ></Image>
                      </Pressable>
                      
                      <Pressable onPress={() => onNext(index + 1)}>
                        <Image
                          style={styles.reactions}
                          source={require("../assets/comments.png")}
                        ></Image>
                      </Pressable>
                      </View>
                      <View style={styles.notinterested}>
                                <View style={styles.ignore}>
                                <Text style={styles.description}>Not Interested</Text>
                                </View>
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


const styles= StyleSheet.create({
    container:{
        flex:1,
        //  alignItems:"center",
        color:"#ffffff",
        // justifyContent:"center",
        flexDirection:"column",
        paddingTop:10
    },   
    postdescription:{

        // paddingRight:10,
        // paddingLeft:10,
        // marginBottom:10
    }, 
    description:{
        color:"#ffffff",
        fontSize:14,
        textAlign:"justify",
        
    },
    postcard:{
        flexDirection:"column",
         
        // justifyContent:"flex-end",

    },
    reactions:{
        height:30,
        width:30,
        resizeMode: 'contain',
    },
    poset_section:{
        
    },
    expandDiv:{
        // flexDirection:"column",
        justifyContent:"flex-end",
        // borderWidth:2,
        height:120,
    },
    bottomtabs:{
        // flex:1,
        // borderWidth:2,
        height:60,
        width:"100%",
        // padding:10,
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"space-between",
        // backgroundColor:"linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%);",
        
    },
    interested:{
        flex:1,
        // borderWidth:2,
        flexDirection:"row",
        justifyContent:"space-around",
        // paddingLeft:10,
      
    },
    
    ignore:{
       
        backgroundColor:"#6C24FF",
        padding:5,
        borderRadius:15
        
    },
    notinterested:{
        flex:1,
        alignItems:"flex-end",
        padding:10,
    },
    savelater:{
        // height:"90%",
    }
    
})

export default ReadingJson