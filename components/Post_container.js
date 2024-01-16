import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import React, { useEffect, useState } from 'react';


function Post_container(){
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
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
    
  return (
    <View style={styles.container}>
      <View style={styles.userinfo}>
        <View style={styles.profilepic}>
          <Image
            style={styles.image}
            source={require("../assets/nicolas.jpeg")}
          ></Image>
        </View>
        <View style={styles.namendate}>
          <Text style={styles.username}>{users[0].userName}</Text>
          <Text style={styles.date}>{users[0].posts[0].date}</Text>
        </View>
        <View style={styles.actions}>
          <Pressable>
            <Text style={styles.unfollow}>Unfollow</Text>
          </Pressable>
          <Image source={require("../assets/3dots.png")}></Image>
        </View>
      </View>

      <View style={styles.postdescription}>
        <View style={styles.postimage}>
          <Image
            style={styles.postpic}
            source={{ uri: users[0].posts[0].postImage }}
          ></Image>
        </View>
        <Text style={styles.postTitle}>{users[0].posts[0].title}</Text>
        <Text style={styles.description}>
          Begin by cutting white fish into bite-sized cubes and marinate them in
          a mixture of lime juice, minced garlic, hot peppers, salt, and pepper.
          Allow the fish to "cook" in the lime juice for about 20-30 minutes.
          Add thinly sliced red onion and chopped cilantro to the marinated
          fish, creating a refreshing and aromatic blend. Serve the ceviche on a
          bed of crisp lettuce leaves, accompanied by slices of boiled sweet
          potato and corn on the cob for a satisfying meal. The result is a
          light, tangy, and flavorful Peruvian Ceviche that perfectly balances
          the freshness of the ocean with the zing of citrus and the richness of
          complementary ingredients. Enjoy this dish immediately to savor its
          exquisite taste and texture.
        </Text>
      </View>
      <View style={styles.expandDiv}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            style={styles.expand}
            source={require("../assets/expand.png")}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center"
    },
    userinfo:{
        height:60,
        width:"100%",
        
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        marginBottom:30,
        paddingHorizontal:15
        
    },
    profilepic:{
        width:60,
        height:60,
        // borderWidth:2,
        flexDirection:"row",
        marginHorizontal:10,
        resizeMode: 'contain',
        borderRadius:100,
        overflow: 'hidden'

    },
    namendate:{
        justifyContent:"center",
        width:"45%",
    },
    username:{
        fontSize:16,
        color:"#ffffff",
        // marginHorizontal:10,
        
    },
    date:{
        fontSize:14,
        color:"#929899"
    },
    actions:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
       
    },
    unfollow:{
        color:"#ffffff",
        marginHorizontal:30
    },
    postpic:{
     
        
        height: 248,
        resizeMode:'cover'

        
    },
    image:{
        height:60,
        width:60,
        
        

      },
    makepost:{
        marginLeft:20
    },
    postimage:{
        marginBottom:20,
    },
    postdescription:{

        paddingRight:10,
        paddingLeft:10,
        marginBottom:10
    },
    postTitle:{
        fontSize:16,
        fontWeight: 'bold',
        color:"#ffffff",
        marginBottom:10,

    },
    description:{
        color:"#ffffff",
        fontSize:14,
        textAlign:"justify",
 
    },
    
    expand:{
        height:30
    },
    expandDiv:{
        borderWidth:2,
        height:60,
        width:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#CED704",
        borderRadius:30,
    },
    
})


export default Post_container