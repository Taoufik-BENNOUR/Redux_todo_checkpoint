import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask,check,deletetask,update } from "./redux/action";



function App() {
  const dispatch=useDispatch()
  const {tasks} = useSelector(state=>state)
  const [task, setTask] = useState();
  const [updated, setupdate] = useState("");
  return (
    <div style={{textAlign:'center',background:'rgb(255,102,0,0.6)',margin:'50px 30%',padding:30,borderRadius:'15px'}} >
      <h2>ADD TASKS</h2>
       <input onChange={e=>setTask(e.target.value)} style={{border:'none',padding:'5px'}} />
       <button style={{border:'none',margin:10}} onClick={()=>dispatch(addtask({text:task,done:false,id:Math.random()}))} > ADD</button>
      <h2>TASKS TO DO</h2>
          {tasks.filter(el=>!el.done).map(el=>
          //make new component
          <div style={{margin:10,display:'flex',justifyContent:'space-around'}}>
            <div>
              <input type="checkbox" onChange={()=>dispatch(check(el.id))}/>
            {el.text}
            </div>      
            <input type="text"  value={updated} onChange={(e)=>setupdate(e.target.value)} />
            
            <button style={{border:'none'}} onClick={()=>dispatch(update(el.id,updated))}>UPDATE</button>
            <span onClick={()=>dispatch(deletetask(el.id))} style={{color:'red',cursor:'pointer',fontWeight:'bold'}}>X</span>
          </div>)}
      <h2>COMPLETED TASKS</h2>
      {tasks.filter(el=>el.done).map(el=>
          <div style={{margin:10,display:'flex',justifyContent:'space-around'}}>
            <div><input type="checkbox" onChange={()=>dispatch(check(el.id))}/>
            {el.text}</div>
            
            <input type="text"  onChange={(e)=>setupdate(e.target.value)} />
            <button onClick={()=>{dispatch(update(el.id,updated))
            setupdate("")}}>UPDATE</button>
          </div>)}      
    </div>
  );
}

export default App;
