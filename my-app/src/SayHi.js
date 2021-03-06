import React from 'react';

function SayHi() {
    const [ loading, setLoading ] = React.useState(false);
    const [ greeting, setGreeting ] = React.useState('');

    function greet() {
        setLoading(!loading);

        setTimeout(() => {
            setLoading(false);

            setGreeting('Hello !!!');
        }, 3000);
    }

    return (
    <div>
        <button onClick={greet} className="btn">SAY HI!</button>
        {loading && <div className="loader" ></div>}
        {!loading && <span>{greeting}</span>}
    </div>
    )
}

export default SayHi;
