import React, { useState, useEffect, constructor } from 'react';
import { View, Image, Text, Linking, Animated, Platform } from 'react-native';
import styles from './styles';
import { TouchableOpacity, RectButton, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 

function Contador({ }){
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const icom = [
    <MaterialCommunityIcons style={styles.iconFamily} name="human-male" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsup" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-male" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsup" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-male" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsup" size={55} />,
    <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} />,
  ];


  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [icon,setIcone] = useState(false);
  const [title, setTitle] = useState ('Teste');
  
  
useEffect(() => {
  if (count < 1 && icon == true){
    setIcone(!icon)
  }
});
  function handleOnPress () {
    setIcone(!icon);
  }

  function handlePolichinelo () {
    setCount(count + 1)
    setCount2(count2 + 1)
    if ( count > 6){
    setCount(count => 0)
    }
  }
  function handlePolichineloRemove () {
    setCount(count - 1)
    setCount2(count2 - 1)
    if ( count > 6){
    setCount(count => 0)
    }
  }
  

  return(
   <>
    <View style={styles.container}>
      <Text style={styles.buttonText} onPress={handlePolichinelo}>Polichinelo:</Text>
        <Text>{icom[count]}</Text>      
      <TouchableOpacity onPress={(handlePolichinelo)}>
                <Text style={styles.addremove}        
                >+</Text>      
      </TouchableOpacity>
      <TouchableOpacity onPress={(handlePolichineloRemove)}>
                <Text style={styles.addremove}        
                >-</Text>      
      </TouchableOpacity>
        <Text style={styles.buttonText2}>Você já realizou:</Text><Text style={styles.buttonText2}>{count2/4}</Text>
      
      <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} onPress={handleOnPress} /> 
      { icon &&  
      <MaterialCommunityIcons style={styles.iconFamily} name="human-handsdown" size={55} onPress={handleOnPress} />
      }
    </View>
       
   </>
  ) 
}

export default Contador;
