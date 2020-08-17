import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2D3741',
      alignItems: 'center',
      justifyContent: 'center',
    },
    floatingButton: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 15,
      right: 15,
      width: 60,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 100,
    },
    counter: {
      fontSize: 25,
    },
    buttonText:{
        fontSize: 30, 
        color: '#F1574D'
    },
    buttonText2:{
       color: '#F6821F',
       fontSize: 40, 
    },
    addremove:{
        fontSize: 85,
        color: '#F1574D'
         
    },
    textCont:{
        fontSize: 40,
        color: '#F1574D'
    },

    iconFamily:{
      color: '#F1574D'
  },
  
    

})

export default styles;