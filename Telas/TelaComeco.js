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



const TelaComeco =(props)=>{
  const contatos = useSelector(estado=>estado.contatos.contatos);
    const dispatch = useDispatch();

      useEffect(() => {
        dispatch(contatosActions.listarContatos())
    }, [dispatch]);
 
  const removerContato = (keyASerRemovida)=>{
    setContatos(contatos=>{
        return contatos.filter((contato)=>{
         return contato.key !== keyASerRemovida
      });
    });
  };

  return ( 
    <FlatList
      data={contatos}
      keyExtractor={contato => contato.id}
      renderItem={contato =>
        <ContatoItem
          idContato={contato.item.id}
          nomeContato={contato.item.nome}
          numeroContato={contato.item.numero}
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