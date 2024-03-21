import React, {useState, useEffect, useContext, useReducer} from "react"
import {Lontext} from "./context"
import ucer from "./reducer"

export function ToDoList() {

    const [state, dispatch] = useReducer(ucer, JSON.parse(localStorage.getItem("todo")))

    const [inputValue, setInputValue] = useState("")

    const addNewDate = event => {
        if(event.key === "Enter") {
            dispatch({
                type: "add",
                payload: inputValue,
            })
        setInputValue("")
        }
    }




    useEffect(()=>{
        console.log("useEffect 2")
        localStorage.setItem("todo", JSON.stringify(state))
    }, [state])

    return (
        <Lontext.Provider value={{dispatch}}
        >
            <h2>To Do list</h2>
            <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} onKeyPress={addNewDate}/>
            <p> {state.map(item => `${item.active? item.name : ""} `)} </p>
            <div>
                {state.map(item => <TodoItem key={item.name} item={item}/>)}
            </div>
        </Lontext.Provider>
    )
}

function TodoItem({item}) {

    const {dispatch} = useContext(Lontext)

    return (
        <li>
            <input type="checkbox" value={item.active} checked={item.active} onChange={() =>
                dispatch({
                    type:"changeCheckBox",
                    payload: item.id
                })
            }/>
            <p>{item.name}</p>
            <button onClick={() => dispatch({
                type:"removeTodo",
                payload: item.id})}>Удалить</button>
        </li>
    )
}