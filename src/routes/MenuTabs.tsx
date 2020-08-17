import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Arruma from '../pages/Arruma';



const {Navigator, Screen} = createBottomTabNavigator ();


function MenuTabs() {
    return (
        <Navigator 
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 55,
                    backgroundColor: '#2D3741',
                    BorderlessButton: 1,
                    borderTopColor: 'transparent',
                },
                tabStyle:{
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                },

                iconStyle:{
                   flex: 0,
                   width: 40,
                   height: 40,
                   flexDirection: 'column',

                },

                labelStyle:{
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 13,
                    marginBottom: 5
                },
                /*inactiveBackgroundColor: '#2D3741',*/
                inactiveBackgroundColor: '#21282f',
                activeBackgroundColor: '#21282f',
                inactiveTintColor: '#3d4b58',
                activeTintColor: '#D6F420',
            }}>
            <Screen 
                name="Menu" 
                component={Arruma}
                options={{
                    tabBarLabel: 'Arrumadinhos, Burgs e Refris',
                    tabBarIcon: ({ color, focused }) =>{
                        return(
                            <>
                            
                            <Entypo name="bowl" size={30} color={focused ? '#D6F420' : color}/>
                            
                            </>
                        );
                    }
                }}
            />
                
        </Navigator>
    );
}

export default MenuTabs;
