import React, { ReactNode } from 'react';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from './styles';

import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title })=> {
    return (
        <View style={styles.container}>
            
            <View style={styles.topBar}>
                
                <Image source={logoImg} style={styles.banner}/>
            
            </View>

            <Text style={styles.title}>CARDÁPIO:</Text>

        </View>
        
    )
   
}


export default PageHeader;