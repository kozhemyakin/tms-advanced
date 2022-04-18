import React from 'react'; // import { useState } from 'react';

function Checkbox() {

    let [ state, setState ] = React.useState('activated'); // useState(1)
    // const [ activated, setActivated ] = React.useState(true);

    const changeState = () => {
        if (state === 'activated') {
            setState('deactivated')
        } else if (state === 'deactivated') {
            setState('activated')
        }
    }

    return <div className="empty">
        <button onClick={changeState}>{state}</button>  
    </div>
}

export default Checkbox;
