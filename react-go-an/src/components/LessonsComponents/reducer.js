export default function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    name: action.payload,
                    id: Date.now(),
                    active: false
                }
            ]

        case "removeTodo":
            return state.filter(todo => todo.id !== action.payload)

        case "changeCheckBox":
            return state.map(todo => {
                if(todo.id === action.payload) {
                    todo.active = !todo.active
                }
                return todo
            })

        default:
            return state
    }
}

