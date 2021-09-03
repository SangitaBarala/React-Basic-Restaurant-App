import React, {useState, useEffect} from 'react';
//import '../Hooks/hookStyle.css'
import './style.css'
const UseState = () => {
    const [state, setState] = useState(0)
    useEffect(()=>{
        document.title = `MyApp (${state})`
    })

    return (
        <div className="center-div">
            <div className="buttons">
                <p>You clicked {state} times</p>
                <button className="button2" onClick={()=>setState(state+1)}>Increment</button>
                <span>{state}</span>
                <button className="button2" onClick={()=>(state>0 ? setState(state-1) : setState(0))}>Decrement</button>
            </div>
        </div>

    );
};

export default UseState;