import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import cheem from './cheem.png';
import one from './1.gif';
import two from './2.gif';
import "./App.css";
const App = () => {
const [item,setitem]=useState("");
const [itemArray,setItemArray]=useState([]);
const [btn,setbtn]=useState(false);
const [vid,setvid]=useState(null);
const setValue=(event)=>{
setitem(event.target.value);

}

const callTheValue=()=>{
    if(item!=="")
{setItemArray((old)=>{
    return [...old,item];
})
setitem("");

}
else{
    alert("please enter something...")
}
}

const deletee=(id)=>{

    setItemArray((olditem)=>{
return olditem.filter((arrayelemet,index)=>{
    return index!==id;
})
    })
}

const editTask=(id)=>{
    setbtn(true);
    setitem(itemArray[id]);
    setvid(id);
}
const editkrdo=()=>{
const newt=[...itemArray];
newt[vid]=item;
setItemArray(newt);
    setvid(null);
    setbtn(false);
    setitem("");

}
const moveUp=(id)=>{
    
const newt=[...itemArray];
let temp=newt[id];
if(newt.length>1 && (id-1)>=0){
newt[id]=newt[id-1];
newt[id-1]=temp;
}
setItemArray(newt);
    
    console.log("move");
}

const moveDown=(id)=>{
    
const newt=[...itemArray];
if(newt.length>1 && (id+1)<newt.length){
    let temp=newt[id];
newt[id]=newt[id+1];
newt[id+1]=temp;
}
setItemArray(newt);
    
}
    return (
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h1 className="text-capitalize text-center">
                <img src={one} height='60' width='60' alt='...'/>
                      Cheemu's To-Do List 
                <img src={one} height='60' width='60' alt='...'/>
            </h1>
        <div className="card card-body my-3">
            <div className="input-group">
            <input type="text" 
                className="form-control me-2" 
                id="gg" onChange={setValue} 
                value={item} 
                placeholder="To Do Item.."
            />
            {btn?<button className="btn" id="add" 
               onClick={editkrdo}><i class="far fa-save"></i>
               </button>:<button className="btn" id="add" onClick={callTheValue}> 
               <i class="fas fa-plus"></i>
               </button>}
          </div>
        </div>
          <ul className="list-group my-5">
          {itemArray.map((value,index)=>{
                    return <List
                               element={value}
                               id={index}
                               deletee={deletee}
                               editTask={editTask}
                               moveUp={moveUp}
                               moveDown={moveDown}
    
                            />
                                        })
           } 
           </ul>




        
          </div>
        </div>
      </div>


    )
}

export default App;
