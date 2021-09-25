import {AddData,DeleteData,IncrimentData,DecrimentData,ClearData,Totalprice} from '../Action/actiontype';

const state={
    todoList:[],
    quantity1:0,
    id:0,
    totalprice:0
}

function todoList (mstate ={...state},action){
    switch(action.type){
        case AddData:
            if(action.payload === null || action.payload === undefined){
                alert("There is no data in payload")
            }
           else{
                console.log(action.payload,"action.payload");
                mstate.todoList.push(action.payload)
                console.log(mstate.todoList,"reducer todolist")
           }

       
        return deepCopy(mstate);
        case DeleteData:
            if(action.payload === null || action.payload === undefined){
                alert("There is no data in payload")
            }
            else{
                mstate.todoList = mstate.todoList.filter(ls => ls.id !== action.payload)
            }
            return deepCopy(mstate);
        case ClearData:
            if(action.payload === null || action.payload === undefined){
                alert("There is no data in payload")
            }
            else{
               console.log("mstate.todoList",mstate.todoList) 
                const newlist=[];
                mstate.todoList = newlist;
            }
                return deepCopy(mstate);
        case IncrimentData:
            if(action.payload === null || action.payload === undefined){

            }else{
                         mstate.todoList.map(ls=>{if(ls.id === action.payload.id){
                            {
                                console.log(ls,"Reducer ID")
                                ls.quantity = ls.quantity+1
                            }

                        }

                    })

            }
            return deepCopy(mstate);
            case DecrimentData:
            if(action.payload === null || action.payload === undefined){

            }else{
                     
                         mstate.todoList.map(ls=>{if(ls.id === action.payload.id){
                            if(ls.quantity <= 1){
                                console.log("if")
                                mstate.todoList = mstate.todoList.filter(ls => ls.id !== action.payload)
                                
                                alert('You cannot go less then 1')
                            }else{
                                ls.quantity = ls.quantity-1
                            }
                        }

                    })

            }
            return deepCopy(mstate);
            case Totalprice:
            if(action.payload === null || action.payload === undefined){
                alert("There is no data in payload")
            }
           else{
                console.log(action.payload,"Totalprice in reducer");
                mstate.totalprice=action.payload
                console.log( mstate.totalprice,"mastat in reducer");
           }
        return deepCopy(mstate);
        default:
            return deepCopy(mstate);

    }
}

const deepCopy =obj =>{
    const newobj = JSON.parse(JSON.stringify(obj));
    return newobj;
}
 export default todoList;