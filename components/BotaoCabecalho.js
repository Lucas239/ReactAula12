import React from 'react';
import{HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {Platform, Button} from 'react-native';
import Cores from '../Cores/Cores';


const BotaoCabecalho = (props) =>{
    return(
        <Button
            {...props}
            IconComponent = {Ionicons}
            iconSize={25}
            color={Platform.OS==='android'?'black':Cores.primary}
            
        />
    );
};
export default BotaoCabecalho;