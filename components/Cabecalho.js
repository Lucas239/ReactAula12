import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const Cabecalho =(props)=>{
    return(
        <View style={estilos.cabecalho}>
            <Text style={estilos.titulo}>{props.titulo}</Text>
        </View>
    );
}
const estilos = StyleSheet.create({
    cabecalho:{
        width:Medidas.cabecalhoWidth,
        height:Medidas.cabecalhoHeigth,
        paddingTop:Medidas.cabecalhoPadding,
        backgroundColor:Cores.backCabecalho,
        alignItems:Medidas.alignGeral,
        justifyContent:Medidas.cabecalhoJustify
    },
    titulo:{
        color:Cores.colorTitulo,
        fontSize:Medidas.tituloFontS  
    }
});
export default Cabecalho;