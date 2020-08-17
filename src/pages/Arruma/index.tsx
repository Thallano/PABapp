import React, { useState } from 'react';
import {View, Text, Linking } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { MaterialIcons } from '@expo/vector-icons'; 
import ItemMenu from '../../components/Itens';
import styles from './styles';
import { RectButton, ScrollView, BorderlessButton } from 'react-native-gesture-handler';


function Arruma ( ) {
   
    return (
        
        <View style={styles.container}>
            <PageHeader title="Cardápio" >
            </PageHeader>
            <ItemMenu /> 
        </View>   
          
        
    );
}

export default Arruma;