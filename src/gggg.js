<div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
                <img src={cheem} height='60' width='60' alt='...'/>
                      Cheemu's To-Do List 
                <img src={cheem} height='60' width='60' alt='...'/>
            </h3>
        <div className="card card-body my-3">
            <div className="input-group">
            <input type="text" 
                className="form-control me-2" 
                id="gg" onChange={setValue} 
                value={item} 
                placeholder="To Do Item.."
            />
            {btn?<button className="btn btn-outline-dark" id="add" 
               onClick={editkrdo}><i class="far fa-save"></i>
               </button>:<button className="btn btn-outline-dark" id="add" onClick={callTheValue}> 
               <i class="fas fa-plus"></i>
               </button>
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