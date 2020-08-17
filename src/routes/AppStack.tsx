import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import MenuTabs from './MenuTabs';
import Contador from '../pages/Contador';
import Description from '../pages/Descriptions';


const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing}/>  
                <Screen name="Contador" component={Contador}/>    
                <Screen name="MenuTabs" component={MenuTabs}/> 
                <Screen name="Descriptions" component={Description}/>       
            </Navigator>
        </NavigationContainer>
        
    )
}

export default AppStack;