import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';

import { Poppins_400Regular, Poppins_600SemiBold, Poppins_900Black, useFonts } from '@expo-google-fonts/poppins';
import { Raleway_900Black, Raleway_700Bold, Raleway_800ExtraBold} from '@expo-google-fonts/raleway';

import AppStack from './src/routes/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_600SemiBold,
    Poppins_900Black,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  }); 
  
  if (!fontsLoaded){
    return <AppLoading/>;  
  } else {
    return (
    <>
      <AppStack />
      
      <StatusBar style="dark"  />
    </>
    );
  } 
}
