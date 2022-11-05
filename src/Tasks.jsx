import { useState } from "react"
import closeIcon from "./closecircle.svg"
import "./Tasks.css"

function Tasks(){

    const [taskList,setTaskList] = useState([])

    const [input,setInput] = useState("");

    function addTask(){
        if(!input) return
        setTaskList([
            ...taskList,
            {
                text:input,
                status: true
            }
        ])
        setInput("")
    }

    return(
        <div className="tasks-container">
            <h1>
                My Tasks
            </h1>
            <section className="tasks-input">
                <input
                    type="text"
                    placeholder="Add New Task"
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </section>
            <section className="tasks-list">
                {taskList.map(
                    ({text,status})=>
                    <div className={
                        `task-card ${!status?"task-card--disabled":""}`
                        }>
                        <p>
                            {text}
                        </p>
                        <img src={closeIcon} alt="Close" />
                    </div>
                )}                
            </section>
        </div>
    )
}

export default Tasks