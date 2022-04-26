import React from 'react';
import { MdPause, MdRepeat, MdRepeatOne } from "react-icons/md";

function Checkbox() {

    const [ state, setState ] = React.useState('MdPause');

    const changeState = () => {
        if (state === 'MdPause') {
            setState('MdRepeat')
        } else if (state === 'MdRepeat') {
            setState('MdRepeatOne')
        } else if (state === 'MdRepeatOne') {
            setState('MdPause')
        }
    }

    return (
    <div className="empty">
        <button onClick={changeState}>
        {state === 'MdPause' && <MdPause color="black" size="5em" />}
        
        {state === 'MdRepeat' && <MdRepeat color="grey" size="5em" />}
        
        {state === 'MdRepeatOne' && <MdRepeatOne color="#3667f7" size="5em"/>}
         </button>  
    </div>
    )
}

export default Checkbox;
