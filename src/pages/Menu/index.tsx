import React from 'react';
import {View } from 'react-native';
import PageHeader from '../../components/PageHeader';


import ItemMenu from '../../components/Itens';

import styles from './styles';


function Menu ( ) {
    
    return (
        
        <View style={styles.container}>
            <PageHeader title="Cardápio" >
            </PageHeader>
            <ItemMenu /> 
        </View>   
        
    );
}

export default Menu;