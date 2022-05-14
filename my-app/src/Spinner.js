import React from 'react';

function Spinner({text}) {

    const [animated,setAnimated] = React.useState(false);
    
    function spinnerControl() {
        setAnimated(!animated);
    }

    return (
    <div>
        {animated ? <div className='loader2 loader2-animated'/> : <div className='loader2'></div>}
        {animated ? <button onClick={spinnerControl} className="btn">STOP</button> : <button onClick={spinnerControl} className="btn">PLAY</button>}
        


    </div>
    )
}

export default Spinner;
