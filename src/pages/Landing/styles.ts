import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F5EFFF',
        padding: 80
    },

    headerIntro:{
        justifyContent: 'space-between',
    },

    coffee:{ 
        color: '#F6821F',
        marginLeft:0,
        marginTop:0,
    },

    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#2E2F32',
        fontSize: 24,
        lineHeight: 30,
        marginTop:0,
        marginBottom: 10,
        marginRight: -40,
        textAlign: 'right',
    },
 
    version:{
        fontFamily: 'Poppins_400Regular',
        color: '#2E2F32',
        fontSize: 18,
    },

    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#2E2F32',
        fontSize: 20,
    },

    containerBottom:{
        flex:1,
        backgroundColor: '#F1574D',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40
    },

    banner:{
        width: 180,
        height: 180,
        marginTop: -130
    },

    buttonPrimary:{
        backgroundColor: '#2E2F32',
        height: 75,
        width: '100%',
        borderRadius: 40,
        padding: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        
    },

    buttonTextMenu:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F1574D',
        fontSize: 18,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },

    iconToMenu:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }

})

export default styles;