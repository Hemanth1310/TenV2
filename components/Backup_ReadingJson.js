import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet, Button,Pressable,Image } from 'react-native';
// import Checker from './Checker';
import Post_Fetch from './Post_Fetch';


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
        <View style={styles.container}>
          {/* {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={users}
                    
                    renderItem={({ item }) => <Text>{item.userName}  </Text>}
                />
                
                
            )} */}

          {users.map((data, index) => (
            <View style={styles.postdescription}>
              {couter == index ? (
                // <View>
                //   <Checker index={index} counter={couter} />
                //   <Text style={styles.description}>{goal.userName}</Text>
                //   <Text style={styles.description}>{index}</Text>
                //   <View style={styles.expandDiv}>
                //     <Pressable onPress={() => onNext(index + 1)}>
                //       <Image
                //         style={styles.expand}
                //         source={require("../assets/expand.png")}
                //       ></Image>
                //     </Pressable>
                //   </View>
                // </View>
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
                        <Text>Checker</Text>
                      </Pressable>
                    </View>
                    <View style={styles.bottomtabs}>
                      <Pressable onPress={() => onNext(index + 1)}>
                        <Image
                          style={styles.expand}
                          source={require("../assets/smily.png")}
                        ></Image>
                      </Pressable>
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
         alignItems:"flex-end",
        justifyContent:"flex-end",

    },
    expand:{
        height:30,
        resizeMode: 'contain',
    },
    poset_section:{
        
    },
    expandDiv:{
        // flexDirection:"column",
        alignItems:"center"
    },
    bottomtabs:{
        
        borderWidth:2,
        height:60,
        width:"100%",
        // flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#CED704",
        
    },
    savelater:{
        // height:"90%",
    }
    
})

export default ReadingJson