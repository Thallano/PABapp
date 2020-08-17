import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2D3741',
        padding: 25,
        justifyContent: 'space-between'
    },

    itensContainer:{
        height: 250,
        marginTop: -20,
        
    },

    textItem:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F6821F',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
    },

    buttonsContainer:{
        alignItems: 'center',
    },  
    
    buttonPrimary:{
        backgroundColor: '#F1574D',
        height: 75,
        borderRadius: 0,
        padding: 24,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    buttonText:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#2D3741',
        fontSize: 18,
    },
})

export default styles;