import React, {Component} from "react"
import {ToDoList} from "./fastHooks"

class L1 extends Component {
    render () {
        return (
            <p>Объект как класс</p>
        )
    }
}

function L2() {
    return <p>Объект как функция</p>
}

class L3 extends Component {
    render () {
        return React.createElement(
            "div",
            null,
            React.createElement("p", {className: "L3"},"Объект как класс через функцию")
        )
    }
}

export function LessonsCompilation () {
    return (
        <>
            <L1/>
            <L2/>
            <L3/>
            <ToDoList/>
        </>
    )
}