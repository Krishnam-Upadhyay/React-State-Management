import { useReducer } from 'react';

const NameList = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_NAME":
                return { ...state, name: action.payload }
            case "ADD_NAME":
                return {
                    names: [...state.names, state.name],
                    name: ''
                };
        }


    }, { names: [], name: '' })

    return <div className='App'>
        <input type="text" value={state.name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />

        <div>Names = {state.names.map((name) => {
            return <div>
                <ul>
                    <li key={name}>{name}</li>
                </ul>
            </div>

        })}
        </div>
        <button type='button' onClick={(e) => dispatch({ type: "ADD_NAME", payload: e.target.value })}>Add Name </button>

    </div>

}

const UserForm = () => {
    const [state, dispatch] = useReducer((state, action) => {

        return { ...state, ...action };

    }, {
        first: '',
        last: '',
    })
    return <div className='App'>
        <input type="text" value={state.first} onChange={(e) => {
            dispatch({ first: e.target.value });
        }} />
        <input type="text" value={state.last} onChange={(e) => {
            dispatch({ last: e.target.value });
        }}
        />
        <div>first: {state.first}</div>
        <div>first: {state.last}</div>
    </div>
}
const App = () => {

    return <div>
        <UserForm />
        <NameList />

    </div>

}

export default App;