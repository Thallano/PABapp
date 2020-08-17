import React, { useState } from 'react';
import {View, Text, Linking } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';



function Descriptions ( ) {
   
    return (
        
        <View style={styles.container}>
            <PageHeader title="DESCRIÇÃO" >
            </PageHeader>
            <Text>Oi</Text>
        </View>   
          
        
    );
}

export default Descriptions;