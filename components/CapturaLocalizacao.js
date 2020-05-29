import React, {useState} from 'react';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
} from 'react-native';

import Cores from '../Cores/Cores';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import PreviewDoMapa from './PreviewDoMapa';

const CapturaLocalizaçao = (props) => {

    const[estaCapturando, setEstaCapturando]= useState(false);
    const[localizacaoSelicionada, setLocalizacaoSelecionada] = useState();

    const capturarLocalizacao = async ()=>{
        const temPermissao = await verificarPermissóes();
        if(temPermissao){
            setEstaCapturando(true);
            try{
                const localizacao = await Location.getCurrentPositionAsync({timeout: 8000});
                console.log(localizacao);
                setLocalizacaoSelecionada({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                });
            }
            catch(err){
                Alert.alert(
                    'Impossível obter localização',
                    'Tente novamente mais tarde ou escolha do mapa',
                    [{text:"OK"}]
                );
            }
            setEstaCapturando(false);
        }
    };

    const verificarPermissóes = async()=>{
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        if(resultado.status !== "granted"){
            Alert.alert(
                'Sem permissão',
                'É preciso liberar acesso ao mecanismo de localização',
                [{text: "OK"}]
            )
            return false;
        }
        return true;
    }

  return (
    <View style={estilos.capturarLocalizacao}>
        <PreviewDoMapa
         style={estilos.previewDoMapa}
         localizacao={localizacaoSelicionada}>
            {

                estaCapturando 
                ?
                    <ActivityIndicator
                        size="large"
                        color={Cores.primary}
                    />
                :
                <Text>Nenhuma localização disponível</Text>
            }
        </PreviewDoMapa>
        <Button
            title="Obter localização"
            color={Cores.primary}
            onPress={capturarLocalizacao}
        />
    </View>
  );
}

const estilos = StyleSheet.create({
    capturarLocalizacao:{
        marginBottom:15
    },
    previewDoMapa:{
        marginBottom:10,
        width:'100%',
        height:400,
        borderColor:'#DDD',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CapturaLocalizaçao;