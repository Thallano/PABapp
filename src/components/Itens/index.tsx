import React, { useState, useEffect, } from "react";
import {View, Text, Linking, Alert, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


import styles from "../Styles/styles";
import { RectButton, TouchableOpacity, ScrollView } from "react-native-gesture-handler";

function ItemMenu( ) {
    
    const color = [
        '#3d4b58',
        '#F1574D'
    ];

    const name : string[] = [
        'ARRUMADINHO GRANDE\n',
        'ARRUMADINHO MÉDIO\n', 
        'ARRUMADINHO PEQUENO\n',
        'X-PAPAI\n',
        'X-MAMÃE\n', 
        'X-FILHO\n', 
        'X-FILHA\n',
        'GUARANÁ 1L\n',
        'COCA-COLA 1L\n',  
        'COCA-COLA LATA\n',
        'GUARANÁ LATA\n',
        'CAÇULINHA\n'
    ];

   
    const value = [
        16,
        14, 
        12,
        13,
        12, 
        9, 
        8,
        5,
        7, 
        4, 
        4,
        3
    ];

    const position = [
        0,
        1,
        2,
        3,
        4,
    ];

    const description = [
        'Maria Isabel, Frango, Carne e Calabresa em Cubos, Feijão Tropeiro e Creme de Galinha',
        'Maria Isabel, Frango, Carne e Calabresa em Cubos, Feijão Tropeiro e Creme de Galinha',
        'Maria Isabel, Frango, Carne e Calabresa em Cubos, Feijão Tropeiro e Creme de Galinha',
        'Pão, carne 160g, queijo, alface, tomate e molho especial do papai.',
        'Pão, carne 160, queijo, alface, tomate e molho especial da mamãe.',
        'Pão, carne 90g, queijo, calabresa, alface, tomate e molho especial da mamãe.',
        'Pão, carne 90g, queijo, cebola caramelizada, alface, tomate e molho especial da mamãe.',
        'Refrigerante em embalagem PET, não Retornável.',
        'Refrigerante em embalagem PET, não Retornável.',
        'Refrigerante em Lata de 350ml, não Retornável.',
        'Refrigerante em Lata de 350ml, não Retornável.',
        'Refrigerante em embalagem PET de 200ml, não Retornável.',
    ];

    /*Controle Resumo Itens*/ 
    

    /* Arrumadinhos */
    const [count1, setCount1] = useState(null);
    const [count2, setCount2] = useState(null);
    const [count3, setCount3] = useState(null);

    /* X-anduiches */
    const [count4, setCount4] = useState(null);
    const [count5, setCount5] = useState(null);
    const [count6, setCount6] = useState(null);
    const [count7, setCount7] = useState(null);

     /* Refris */
    const [count8, setCount8] = useState(null);
    const [count9, setCount9] = useState(null);
    const [count10, setCount10] = useState(null);
    const [count11, setCount11] = useState(null);
    const [count12, setCount12] = useState(null);
    
    /*controle On Delete*/
    const [resume1, setResume1] = useState([]);
    const [resume2, setResume2] = useState([]);
    const [resume3, setResume3] = useState([]);
    const [resume4, setResume4] = useState([]);
    const [resume5, setResume5] = useState([]);
    const [resume6, setResume6] = useState([]);
    const [resume7, setResume7] = useState([]);
    const [resume8, setResume8] = useState([]);
    const [resume9, setResume9] = useState([]);
    const [resume10, setResume10] = useState([]);
    const [resume11, setResume11] = useState([]);
    const [resume12, setResume12] = useState([]);
    
    const { navigate } = useNavigation();
    /* Calculos Totais */

    const [bagColor, setBagColor] = useState(0);
    const totalCost = (count1*value[0]+count2*value[1]+count3*value[2]+count4*value[3]+count5*value[4]+count6*value[5]+count7*value[6]+count8*value[7]+count9*value[8]+count10*value[9]+count11*value[10]+count12*value[11]);
    const totalBag = (count1+count2+count3+count4+count5+count6+count7+count8+count9+count10+count11+count12);
   
    /* Visibilidade da Bag */
    const [isBagVisible, setIsBagVisible] = useState(false);

    const [isRemoveVisible, setIsRemoveVisible] = useState(false);

       
    function handleLinkToWhatsapp ( ) {
        Linking.openURL(`https://api.whatsapp.com/send?phone=5586988377437&text=Oi__Boa_noite!_Gostaria_de_fazer_este_pedido:__>${"\n"}${resume1}${resume2}${resume3}${resume4}${resume5}${resume6}${resume7}${resume8}${resume9}${resume10}${resume11}${resume12}__|No__valor__total__de__R$__${totalCost},00`)
    }
           
    function handleOnDelete (){
        
        setCount1(count1 => null)
        
        setCount2(count2 => null)
       
        setCount3(count3 => null)
        
        setCount4(count4 => null)
       
        setCount5(count5 => null)
        
        setCount6(count6 => null)
        
        setCount7(count7 => null)
       
        setCount8(count8 => null)
        
        setCount9(count9 => null)
        
        setCount10(count10 => null)
      
        setCount11(count11 => null)

        setCount12(count12 => null)

        setResume1(resume1 => [])
        setResume2(resume2 => [])
        setResume3(resume3 => [])
        setResume4(resume4 => [])
        setResume5(resume5 => [])
        setResume6(resume6 => [])
        setResume7(resume7 => [])
        setResume8(resume8 => [])
        setResume9(resume9 => [])
        setResume10(resume10 => [])
        setResume11(resume11 => [])
        setResume12(resume12 => [])
    }

    function handleBagVisible( ) {
        setIsBagVisible(!isBagVisible);
    }
      
    useEffect(() => {
          if (bagColor != 0 && totalBag == 1){
          setIsBagVisible(isBagVisible => true)
          }
    },[bagColor , totalBag]);
  
    useEffect(() => {
          if (totalBag == 0){
          setIsBagVisible(isBagVisible => false)
          setIsRemoveVisible(isRemoveVisible => false)
          }
    },[totalBag]);

    useEffect(() => {
        if (totalCost != 0 ) {
          setBagColor(bagColor => 1)
        } else {
          setBagColor(bagColor => 0)
        }
    });
  
    function handleOnPressPlus( ){
        setCount1(count1 + 1)
        setResume1(resume1.concat(name[0]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove ( ){
        if(count1 === 1 || count1 === null ) {
            setCount1(count1 => null)
            setResume1(resume1 => [])
            } else {
                setResume1(resume1.splice(resume1[0], count1-1))
                setCount1(count1 - 1)
            }
    }

    function handleOnPressPlus2( ){
        setCount2(count2 + 1)
        setResume2(resume2.concat(name[1]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove2 ( ){
        
        if(count2 == 1 || count2 === null) {
            setCount2(count2 => null)
            setResume2(resume2 => [])
            } else {
                setResume2(resume2.splice(resume2[0], count2-1))
                setCount2(count2 - 1)
            }
    }

    function handleOnPressPlus3( ){
        setCount3(count3 + 1)
        setResume3(resume3.concat(name[2]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove3 ( ){
        
        if(count3 == 1 || count3 === null) {
            setCount3(count3 => null)
            setResume3(resume3 => [])
            } else {
                setResume3(resume3.splice(resume3[0], count3-1))
                setCount3(count3 - 1)
            }
    }

    function handleOnPressPlus4( ){
        setCount4(count4 + 1)
        setResume4(resume4.concat(name[3]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove4 ( ){
        
        if(count4 == 1 || count4 === null) {
            setCount4(count4 => null)
            setResume4(resume4 => [])
            } else {
                setResume4(resume4.splice(resume4[0], count4-1))
                setCount4(count4 - 1)
            }
    }

    function handleOnPressPlus5( ){
        setCount5(count5 + 1)
        setResume5(resume5.concat(name[4]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove5 ( ){
        
        if(count5 == 1 || count5 === null) {
            setCount5(count5 => null)
            setResume5(resume5 => [])
            } else {
                setResume5(resume5.splice(resume5[0], count5-1))
                setCount5(count5 - 1)
            }
    }

    function handleOnPressPlus6( ){
        setCount6(count6 + 1)
        setResume6(resume6.concat(name[5]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove6 ( ){
        
        if(count6 == 1 || count6 === null) {
            setCount6(count6 => null)
            setResume6(resume6 => [])
            } else {
                setResume6(resume6.splice(resume6[0], count6-1))
                setCount6(count6 - 1)
            }
    }

    function handleOnPressPlus7( ){
        setCount7(count7 + 1)
        setResume7(resume7.concat(name[6]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove7 ( ){
        
        if(count7 == 1 || count7 === null) {
            setCount7(count7 => null)
            setResume7(resume7 => [])
            } else {
                setResume7(resume7.splice(resume7[0], count7-1))
                setCount7(count7 - 1)
            }
    }

    function handleOnPressPlus8( ){
        setCount8(count8 + 1)
        setResume8(resume8.concat(name[7]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove8 ( ){
        
        if(count8 == 1 || count8 === null) {
            setCount8(count8 => null)
            setResume8(resume8 => [])
            } else {
                setResume8(resume8.splice(resume8[0], count8-1))
                setCount8(count8 - 1)
            }
    }

    function handleOnPressPlus9( ){
        setCount9(count9 + 1)
        setResume9(resume9.concat(name[8]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove9 ( ){
        
        if(count9 == 1 || count9 === null) {
            setCount9(count9 => null)
            setResume9(resume9 => [])
            } else {
                setResume9(resume9.splice(resume9[0], count9-1))
                setCount9(count9 - 1)
            }
    }

    function handleOnPressPlus10( ){
        setCount10(count10 + 1)
        setResume10(resume10.concat(name[9]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove10 ( ){
        
        if(count10 == 1 || count10 === null) {
            setCount10(count10 => null)
            setResume10(resume10 => [])
            } else {
                setResume10(resume10.splice(resume10[0], count10-1))
                setCount10(count10 - 1)
            }
    }

    function handleOnPressPlus11( ){
        setCount11(count11 + 1)
        setResume11(resume11.concat(name[10]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove11 ( ){
        
        if(count11 == 1 || count11 === null) {
            setCount11(count11 => null)
            setResume11(resume11 => [])
            } else {
                setResume11(resume11.splice(resume11[0], count11-1))
                setCount11(count11 - 1)
            }
    }
    
    function handleOnPressPlus12( ){
        setCount12(count12 + 1)
        setResume12(resume12.concat(name[11]))
        setIsRemoveVisible(isRemoveVisible => true)
    }
    function handleOnPressRemove12 ( ){
        
        if(count12 == 1 || count12 === null) {
            setCount12(count12 => null)
            setResume12(resume12 => [])
            } else {
                setResume12(resume12.splice(resume12[0], count12-1))
                setCount12(count12 - 1)
            }
    }

    if( totalBag == 10){
        Alert.alert(
         'Eita O__O!! \nMas tá com fome do cão, \nhein bichim!?'
        )
    }      

return (
        
        <>
        <ScrollView 
                style={styles.itensContainer} 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{
                    paddingBottom: 25,
                }}>

<View style={styles.titleMenuItem}>
<Text style={styles.titleMenuItemText}>ARRUMADINHOS</Text>
<MaterialCommunityIcons name="tie" size={32} style={styles.iconMenuItemTittle}/>
</View>

        <View style={styles.container} >
            
            <Text style={styles.itemName}>{name[0]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[0]}</Text>
            </View>

            <View style={styles.countAddRemove}>
                <Text style={styles.contador}>{count1}</Text>

                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                
                {isRemoveVisible &&
                    <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                    </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[0]},00</Text>
            </View>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[1]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[1]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count2}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus2} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove2}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }   
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[1]},00</Text>
            </View>
        </View>   

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[2]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[2]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count3}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus3} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove3}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[2]},00</Text>
            </View>
        </View>

<View style={styles.titleMenuItem}>
<Text style={styles.titleMenuItemText}>X-ANDUICHES</Text>
<FontAwesome5 name="hamburger" size={24} style={styles.iconMenuItemTittle}/>
</View>
    

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[3]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[3]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count4}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus4} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove4}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[3]},00</Text>
            </View>
        </View>
        
        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[4]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[4]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count5}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus5} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove5}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[4]},00</Text>
            </View>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[5]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[5]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count6}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus6} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove6}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }   
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[5]},00</Text>
            </View>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[6]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[6]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count7}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus7} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove7}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[6]},00</Text>
            </View>
        </View>
        
<View style={styles.titleMenuItem}>
<Text style={styles.titleMenuItemText}>BEBIDAS</Text>
<Entypo name="cup" size={24} style={styles.iconMenuItemTittle}/>
</View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[7]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[7]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count8}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus8} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove8}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[7]},00</Text>
            </View>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[8]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[8]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count9}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus9} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove9}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[8]},00</Text>
            </View>
        </View>


        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[9]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[9]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count10}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus10} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove10}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[9]},00</Text>
            </View>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[10]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[10]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count11}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus11} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove11}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[10]},00</Text>
            </View>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.itemName}>{name[11]}</Text>     

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description[11]}</Text>
            </View>

            <View style={styles.countAddRemove} >
                <Text style={styles.contador}>{count12}</Text>
                <TouchableOpacity style={styles.countAdd} onPress={handleOnPressPlus12} >
                    <MaterialIcons name="add" size={32} color="#F1574D" />
                </TouchableOpacity>
                {isRemoveVisible &&
                <TouchableOpacity style={styles.countRemove} onPress={handleOnPressRemove12}>
                    <MaterialIcons name="remove" size={32} color="#F1A24D" />
                </TouchableOpacity>
                }
            </View>

            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ {value[11]},00</Text>
            </View>
        </View>

        {/* RESUMO DO CARRINHO */}
           
        </ScrollView>
            
            <View style={styles.resumeContainer}>  
                        <TouchableOpacity onPress={handleBagVisible} style={styles.buttonShopping}>
                            
                            <Fontisto name="shopping-bag" size={30} color={color[bagColor]} />  
                            { isRemoveVisible &&
                                <Text style={styles.bagCountText}>+{totalBag}</Text>
                            }
                        </TouchableOpacity>    
            { isBagVisible && (
                    <View style={styles.resumeCart} >
                        <Text style={styles.textResume}>Se Arrume:</Text>
                        <RectButton onPress={handleOnDelete} style={styles.removeResumeButton}>
                            <MaterialCommunityIcons style={styles.iconCartRemove} name="cart-remove" size={25} color="#F1A24D"/>
                            <Text style={styles.buttonTextRemove}>Cancelar Pedido</Text>
                        </RectButton>
                        <Text style={styles.resumeDescription}>{resume1}{resume2}{resume3}{resume4}{resume5}{resume6}{resume7}{resume8}{resume9}{resume10}{resume11}{resume12}</Text>
                        <Text style={styles.valorDescount}>R$ {totalCost},00-{totalCost/10}</Text><Text style={styles.valorTotal}>Total: R$ {totalCost-totalCost/10}</Text>
                        <RectButton onPress={handleLinkToWhatsapp} style={styles.buttonSendOrder}>
                            <Text style={styles.buttonTextSend}>Se arrumou?</Text>
                            <MaterialCommunityIcons style={styles.sendIcon} name="cellphone-message" size={16} color="#2D3741" />
                        </RectButton>
                    </View>             
            )}  
            </View>
        </>
    )
}

export default ItemMenu;