import React from 'react';
import TelaComeco from '../Telas/TelaComeco';
import TelaNovoContato from '../Telas/TelaNovoContato'
import TelaContato from '../Telas/TelaContato';
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Cores from '../Cores/Cores';

const ContatosNavigator = createStackNavigator({
    Comeco: TelaComeco,
    Contato: TelaContato,
    NovoContato: TelaNovoContato
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS ==='android'?Cores.primary:''
        },
        headerTintColor: Platform.OS ==='android'?'white':Cores.primary
    }
});

export default createAppContainer(ContatosNavigator);