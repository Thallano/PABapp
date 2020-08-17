import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        marginTop: -25,
        marginRight: -45,
        marginLeft: -25,
        maxHeight: "35%",
        backgroundColor: '#D6F420',
        flexDirection: 'column'
        
    },

     topBar:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 15
    },

    banner:{
        width: 220,
        height: 220,
        
    },

    title:{
        fontFamily: 'Raleway_900Black',
        color: '#2D3741',
        fontSize: 24,
        marginTop: -175,
        marginBottom: 20,
        marginLeft: 10,
        
    },
});

export default styles;