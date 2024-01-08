import { StyleSheet,Text,Button,View,Pressable } from "react-native";

function Tabs(){
    return(
        <View style={styles.container}>
            <Pressable >
                <Text style={styles.following_btn}>Following</Text>
            </Pressable>
            {/* <Button title="Following"></Button>
            <Button title="Discover"></Button> */}
            <Pressable >
                <Text style={styles.following_btn}>Discover</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       
        height:64,
        width:"100%",
        marginBottom:10,
        
        // borderBottomWidth:2,
        borderColor:"white",
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"space-between",
        paddingHorizontal:5,
        
    },
    following_btn:{
        color:"#ffffff",
        fontSize:18,
        borderColor:"#ffffff",
        borderWidth:2,
        padding:10,
        width:177,
        borderRadius:8,
        justifyContent:"center"
    }
    
});

export default Tabs