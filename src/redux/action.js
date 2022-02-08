
export const addtask=(x)=>{
    return {type:'ADDTASK',payload:x}
}

export const check=(id)=>{
    return {type:'CHECK',payload:id}
}

export const update=(id,text)=>{
    return {type:'UPDATE',payload:{id,text}}
}

export const deletetask=(id)=>{
    return {type:'DELETE',payload:id}
}