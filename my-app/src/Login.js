import React from 'react';

function Login() {
    const [ loggedIn, setloggedIn ] = React.useState(false);

    function changeStateOfLogin() {
        setTimeout(() => {
            setloggedIn(!loggedIn);

        }, 2000);
    }

    return (
    <div>
        {loggedIn ? <div className='trollface_card'></div> : <button onClick={changeStateOfLogin} className="btn">Sign in</button>}
    </div>
    )
}

export default Login;
