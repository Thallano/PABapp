import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, Feather} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import logoImg  from '../../../assets/logo.png';
import styles from './styles';

const textRandom = [
    'Bora comer um Lanche?',
    'Esse era o X que me faltava!',
    'Procurando um X-Lanche?',
    'Bora juntar a família toda?',
    'Sem tempo irmão, bora de Lanchão!',
    'Já se Arrumou? Arrumadinho hoje!',
]

const RandomNumber = Math.floor(Math.random()*6);

function Landing(){

   
    const { navigate } = useNavigation();

    function handleNavigateToMenuTabs(){
        navigate('MenuTabs');
    }

    function handleNavigateToCounter(){
        navigate('Contador');
    }
    return (
       <>
       <View style={styles.container}>
            <View style={styles.headerIntro}>
                
                <Feather name="coffee" style={styles.coffee} onPress={handleNavigateToCounter} size={25}  />    

                <Text style={styles.title}>
                    Seja Bem-vindo!{'\n'}
                    <Text style={styles.titleBold}>{textRandom[RandomNumber]}</Text>
                </Text>
            </View>   
        </View> 
        <View style={styles.containerBottom}>
            
            <Image source={ logoImg } style={styles.banner} /> 
             
            <Text style={styles.version}>
                    Versão 1.72
            </Text>

            <RectButton onPress={handleNavigateToMenuTabs} style={styles.buttonPrimary}>
                <Text style={styles.buttonTextMenu}>Menu do Restaurante</Text>
                <MaterialIcons style={styles.iconToMenu} name="restaurant-menu" size={24} color="#F1574D" />
            </RectButton>

        </View>
        </>
    )
    
}

export default Landing;