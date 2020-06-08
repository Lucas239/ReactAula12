import { StyleSheet, Text, View, FlatList, Platform} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import Medidas from '../Medidas/Medidas';
import Cores from '../Cores/Cores';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import * as contatosActions from '../store/contatos-actions';
import ENV from '../env';

import * as firebase from 'firebase';
import 'firebase/firestore';

if(!firebase.apps.length)
  firebase.initializeApp(ENV);

  const db = firebase.firestore();



const TelaComeco =(props)=>{
  const contatos = useSelector(estado=>estado.contatos.contatos);
    const dispatch = useDispatch();

    useEffect(()=> {
      db.collection('contatos').onSnapshot((snapshot)=>{
        let aux = [];
        snapshot.forEach (doc =>{
          aux.push({
          nome: doc.data().nomeContato,
          numero: doc.data().numeroContato,
          chave: doc.id
        })
        })
        setContatos(aux);
      })
    }, []);
  
  
    const removerContato =(chave)=>{
      Alert.alert(
        "Apagar?",
        "Quer mesmo apagar esse contato",
        [
          {text: "Cancelar"},
          {text: "Confirmar",
          onPress:()=> db.collection("contato").doc(chave).delete()}
        ]
      )
    }
  

  return ( 
    <FlatList
      data={contatos}
      keyExtractor={contato => contato.id}
      renderItem={contato =>
        <ContatoItem
          idContato={contato.item.chave}
          nomeContato={contato.item.nome}
          numeroContato={contato.item.numero}
          onDelete={removerContato}
          onSelect={()=>{
            props.navigation.navigate('Contato', 
            {nomeDoContato: contato.item.nome, idContato: contato.id})
          }}
          imagem={contato.item.imagemURI}
        />
      }
    />
  )
}

TelaComeco.navigationOptions = dadosNav =>{
  return{
    headerTitle:'Todos os Contatos',
    headerRight:
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}>
        <Ionicons
          name="ios-add-circle" size={35}
          onPress={()=>{dadosNav.navigation.navigate("NovoContato")}}
        /> 
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({
    tela:{
        flex:Medidas.flexGeral,
        padding:Medidas.telaPadding,
        alignItems:Medidas.alignGeral,
        backgroundColor:Cores.backTela
    },
    titulo:{
        fontSize:Medidas.tituloFont,
        marginVertical:Medidas.tituloMargin
    }
});

export default TelaComeco;