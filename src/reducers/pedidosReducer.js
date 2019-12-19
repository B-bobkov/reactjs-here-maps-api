import { MOSTRAR_PEDIDOS, MOSTRAR_PEDIDO, AGREGAR_PEDIDO, EDITAR_PEDIDO, BORRAR_PEDIDO } from '../actions/types';

const initialState = {
    pedidos : []
};

export default function (state = initialState, action){
    switch(action.type){
        case MOSTRAR_PEDIDOS : 
            return {
                ...state,
                pedidos : action.payload
            }
        case MOSTRAR_PEDIDO : 
            return {
                ...state,
                pedido : action.payload
            }
        case BORRAR_PEDIDO : 
            return {
                ...state,
                pedidos: state.pedidos.filter( pedidos => (pedidos.id !== action.payload))
            }
        case AGREGAR_PEDIDO : 
            return {
                ...state,
                pedidos : [...state.pedidos, action.payload]
            }
        default : 
            return state;
    }
}