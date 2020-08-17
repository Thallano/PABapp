import React, { useState } from 'react';
import {View, Text, Linking } from 'react-native';
import PageHeader from '../../components/PageHeader';

import ItemMenu from '../../components/ItemTres';
import styles from './styles';



function Bebes ( ) {
   
    return (
        
        <View style={styles.container}>
            <PageHeader title="Cardápio" >
            </PageHeader>
            <ItemMenu /> 
        </View>   
          
        
    );
}

export default Bebes;