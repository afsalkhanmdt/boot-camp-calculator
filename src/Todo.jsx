import { useState } from "react"

function Todo(){

    const [todos,setTodos] = useState([
        "Clean Dress",
        "Go for a walk"
    ])
    const [input,setInput] = useState("");

    const addTodo = ()=>{
        setTodos([...todos,input]);
        setInput("")
    }

    return(
        <>
        <div>
            {todos.map(todo=><div>{todo}</div>)}
        </div>
        <div>
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
        </div>
        </>
    )
}

export default Todo