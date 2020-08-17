import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4C4E54', 
        marginBottom: 10,
        width: '98%',
        minHeight: 130,
        maxHeight: '100%',
        justifyContent:'center',
        alignContent: 'center',
        flexDirection: 'column',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 3,
        
        elevation: 5, 
    },

    titleMenuItem:{
        fontSize: 20,
        padding: 5,
        backgroundColor: '#21282f',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconMenuItemTittle:{
        marginRight: 20,
        marginTop: 5,
        color: '#D6F420',
    },

    titleMenuItemText:{
        fontFamily: 'Poppins_900Black',
        color: '#F1A24D',
        fontSize: 20,
        padding: 5,
    },

    itemName:{
        fontFamily: 'Raleway_900Black',
        color: '#D6F420',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5,
    },

    iconFamily:{
        marginTop: -40,
        marginLeft: 90,
        color: '#D6F420'
    },
    
    contador: {
        color: '#D6F420',  
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        fontSize: 20,
        height: 30,
        width: 40,
        backgroundColor: '#283139',
        marginRight: -10,
        marginBottom: -40
    },

    itensContainer:{
        height: "100%",
        width: "100%",
        overflow: 'hidden',
        borderRadius: 10,
        marginTop: "-5%",
    },

    countAdd:{
        marginRight: 25,
        
        padding: 5,
    },

    countRemove:{
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight: 25,  
        padding: 5,  
    },

    descriptionContainer:{
       
    },

    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#9AABAE',
        fontSize: 12,
        maxWidth: "60%",
        marginBottom: 30,
        marginLeft: 10
    },

    
    costContainer:{

    },
   
    costText:{
        fontFamily: 'Raleway_800ExtraBold',
        color: '#D6F420',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        textAlign: 'right',
    },

    itemDescription:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginLeft: 10,
    },
        
    countAddRemove:{
        alignItems: 'flex-end',
        marginTop: "-40%"
    },
         
    totalContainer:{
        backgroundColor: '#21282f'
    },

    resumeContainer:{
        marginTop: -40,
    },

    buttonShopping:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: -10,
        marginRight: -10
    },

    bagIcon:{
    },

    bagCountText: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#F1A24D',
        fontSize: 14,
        marginTop: -10,
        marginBottom: 10
    },

    resumeCart:{
        backgroundColor: '#21282f',
        marginBottom: '-25%',
        marginTop: 0,
        flexDirection: 'column',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 3,
        
        elevation: 5, 
    },

    textResume:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#D6F420',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10
    },
    
    resumeDescription:{
        fontFamily: 'Poppins_400Regular',
        maxWidth: "50%",
        color: '#F5EFFF',
        fontSize: 12,     
        marginLeft: 10,
        marginBottom: 15,
        marginTop: -40
    },

    valorDescount:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#D6F420',
        fontSize: 14,
        textAlign: 'right',
        marginRight: 20,
    },

    valorTotal:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F1A24D',
        fontSize: 18,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: -10
    },
    
    removeResumeButton:{
        minHeight: '20%',
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'flex-end',
        padding: 10
    },
    
    iconCartRemove:{
        marginTop: -10,
        height: 20
    },

    buttonTextRemove:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F1A24D',
        textAlign: 'center',
        fontSize: 13,
        padding: 3
    },

    buttonSendOrder:{
        backgroundColor: '#D6F420',
        width: '45%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: -25,
        borderRadius: 5,
        marginLeft: 10
    },

    buttonTextSend:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#2D3741',
        textAlign: 'center',
        fontSize: 13,
        padding: 3
    },

    sendIcon:{
        marginTop: -10,
        padding: 3
    },


   
})

export default styles;