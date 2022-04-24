import React from 'react';

function Checkbox() {

    const [ state, setState ] = React.useState('повтор треков выключен(1)');

    const changeState = () => {
        if (state === 'повтор треков выключен(1)') {
            setState('повтор треков включен(2)')
        } else if (state === 'повтор треков включен(2)') {
            setState('включается повтор одного трека(3)')
        } else if (state === 'включается повтор одного трека(3)') {
            setState('повтор треков выключен(1)')
        }
    }
    return (
    <div className="empty">
        <button onClick={changeState} style={{ color: btnColor }}>{state}</button>  
    </div>
    )
}

export default Checkbox;
