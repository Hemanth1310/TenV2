import {  StyleSheet, Text, View, Image, Pressable,Alert, Modal } from "react-native";
import { useState } from 'react';


function Post_container_Modal(props){
<View>
   
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Image
      style={styles.postpic}
      source={require("../assets/ceiviche.png")}
    ></Image>
        <Text style={styles.description}>Begin by cutting white fish into bite-sized cubes and marinate them in
      a mixture of lime juice, minced garlic, hot peppers, salt, and pepper.
      </Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
    
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:0,
        
      },
      modalView: {
        margin: 20,
        backgroundColor:'#211C13',
        borderRadius: 20,
        padding: 35,
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


export default Post_container_Modal