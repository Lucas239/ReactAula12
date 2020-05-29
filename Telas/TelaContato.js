import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

const TelaContato=(props)=> {
  return(
  <View>{TelaContato}</View>
  );
}
TelaContato.navigationOptions = (dadosNav) => {
  return {
      headerTitle: dadosNav.navigation.getParam("nomeDoContato")
  }
}
const estilos = StyleSheet.create({});

export default TelaContato;