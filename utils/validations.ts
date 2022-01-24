import _,{map} from 'underscore';


export type OrderResult = {
    orderby: string;
    ordermode: string;
}

export type OrderParams ={
    orderby: string | undefined;
    ordermode: string | undefined;
}

const orderTypes = ['category', 'name', 'price', 'discount'];
const orderModes = ['ASC', 'DESC'];


export const validateOrderFormat = (order : OrderParams | undefined): OrderResult => {
    
    
    if(!order){
        return {orderby:'id', ordermode:'ASC'};
    }
    
    let{orderby, ordermode} = order;
    
    if(!orderby || orderby === ''){
        orderby = 'id';
    }
    if(!ordermode || ordermode === ''){
        ordermode = 'ASC';
    }
    
    ordermode = ordermode.toUpperCase();
    
    if(!orderTypes.includes(orderby)){
        if(!orderModes.includes(ordermode)){
            return {orderby:'id', ordermode:'ASC'};
        }else{
            return {orderby:'id', ordermode};
        }
    }else{
        if(!orderModes.includes(ordermode)){
            return {orderby, ordermode:'ASC'};
        }else{
            return {orderby, ordermode};
        }
    }
}



export const convertToNumber = (value: any | undefined): number | undefined => {
    
    if(!value){
        return undefined;
    }
    if(isNaN(parseInt(value))) {
        return undefined;
    }else{
        return parseInt(value);
    }
}