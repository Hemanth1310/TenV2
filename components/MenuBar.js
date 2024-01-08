import {  StyleSheet, Text, View, Image } from "react-native";

function MenuBar(){
    return(
        <View style={styles.container}>
            <View>
            <Image stlye={styles.image} source={require('../assets/burger_menu.png')}></Image>
            </View>
            <Text style={styles.appname}>TEN</Text>
            <View stlye={styles.makepost}>
                
                <Image  source={require('../assets/make_a_post.png')}></Image>
            </View>
            <Image  source={require('../assets/search.png')}></Image>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        height:64,
        width:"100%",
        
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        alignItems:"center",
        padding:5
        
    },
    appname:{
        fontSize:22,
        color:"#ffffff",
        marginHorizontal:10,
        width:"60%"
    },
    image:{
        marginHorizontal:10,
        height:45
    },
    makepost:{
        marginLeft:20
    }
})


export default MenuBar