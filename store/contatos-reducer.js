import { ADD_CONTATO, LISTA_CONTATOS} from "./contatos-actions";
import Contato from "../modelo/Contato";
const estadoInicial={
    contatos:[]
};

export default(estado = estadoInicial, action)=>{
    switch (action.type) {
        case LISTA_CONTATOS:
            return{
                contatos: action.contatos.map(c=> new Contato(c.id.toString(), c.nomeContato, c.numeroContato, c.imagem))
            }
        case ADD_CONTATO:
            const c = new Contato(action.dadosContato.id.toString(), action.dadosContato.nomeContato, 
            action.dadosContato.numeroContato, action.dadosContato.imagem);
            console.log(JSON.stringify(c))
            return{
                contatos: estado.contatos.concat(c)
            };
        default:
            console.log('aqui'+JSON.stringify(action))
            return estado;
    }
}