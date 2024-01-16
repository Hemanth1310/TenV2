import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import { useState } from 'react';


function Post_container(){
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
           <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.postimage}>
        <Image
          style={styles.postpic}
          source={require("../assets/ceiviche.png")}
        ></Image>
      </View>
      <View style={styles.postdescription}>
        <Text style={styles.description} >
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
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.userinfo}>
        <View style={styles.profilepic}>
          <Image
            style={styles.image}
            source={require("../assets/nicolas.jpeg")}
          ></Image>
        </View>
        <View style={styles.namendate}>
          <Text style={styles.username}>Nicolas Ruiz</Text>
          <Text style={styles.date}>5 Jan</Text>
        </View>
        <View style={styles.actions}>
          <Pressable>
            <Text style={styles.unfollow}>Unfollow</Text>
          </Pressable>
          <Image source={require("../assets/3dots.png")}></Image>
        </View>
      </View>
      <View style={styles.postimage}>
        <Image
          style={styles.postpic}
          source={require("../assets/ceiviche.png")}
        ></Image>
      </View>
      <View style={styles.postdescription}>
        <Text style={styles.description} numberOfLines={10}>
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
     
        width: 330,
        height: 248,
        borderRadius:10
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

        paddingHorizontal:30,
        marginBottom:10
    },
    description:{
        color:"#ffffff",
        fontSize:16,
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
    centeredView: {
        flex: 1,
        height:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:0,
        
      },
      modalView: {
        flwx:1,
        height:"100%",
        paddingTop:35,
       backgroundColor:'#211C13',
        borderRadius: 20,
       marginTop:10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})


export default Post_container