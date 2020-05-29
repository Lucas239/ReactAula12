import React,{useState} from 'react';
import {View,TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const ContatoInput = (props)=>{
  const[nome, setNome]=useState('');
  const[numero, setNumero]=useState('');
  //captura o texto digitado
  const capturaNome=(nome)=>{
    setNome(nome)
  };
  const capturaNumero=(numero)=>{
    setNumero(numero)
  };
    return(
        <View style={styles.contatosView}>
          {/*usuario insere o contato*/}
          <TextInput placeholder="Nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
          <TextInput placeholder="Numero"style={styles.contatosInputText} keyboardType="number-pad" maxLength={10}onChangeText={capturaNumero} value={numero}/>
          
          <TouchableOpacity style={styles.botao}>
            <Ionicons name="ios-add-circle" size={35} onPress={()=>props.onAdicionarContato(nome, numero)} />
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    contatosView:{
        flexDirection:Medidas.viewFlex,
        justifyContent:Medidas.viewJustify,
        alignItems:Medidas.alignGeral,
        height:Medidas.viewHeight, 
        marginVertical:Medidas.viewMargin
      },
      contatosInputText:{
        width:Medidas.inputWidth,
        borderBottomColor:Cores.borderInputT,
        borderBottomWidth:Medidas.inputBorder,
        padding:Medidas.inputPadding,
        borderRadius:Medidas.inputBorderR
      }
});

export default ContatoInput;