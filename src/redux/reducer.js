const initalState={
    tasks:[]
}

export const reducer =(state=initalState,action)=>{
    switch (action.type) {
        case 'ADDTASK':
            return {...state,tasks:[...state.tasks,action.payload]}
        case 'CHECK':
            return {...state,tasks:state.tasks.map(el=>el.id===action.payload?{...el,done:!el.done}:el)}
        case 'UPDATE':
            return {...state,tasks:state.tasks.map(el=>el.id===action.payload.id?{...el,text:action.payload.text}:el)} 
        case 'DELETE':
            return {...state,tasks:state.tasks.filter(el=>el.id!==action.payload)}       
        default:
           return state;
    }
}

