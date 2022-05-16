// FUNCTIONAL COMPONENT

import React from 'react'; 

function Counter() {

    const [ count, setCount ] = React.useState(1);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    return (
    <div className="empty">
        <button onClick={decrement}>  -  </button>  {count}  <button onClick={increment}>  +  </button>  
    </div>
)}

export default Counter;
