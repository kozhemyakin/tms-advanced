import React from 'react';
import ReactTooltip from 'react-tooltip';

function ItalicText({ italic }) {
    const [ state, setState ] = React.useState(false);

    const changeState = () => {
        setState(!state)
    }

    let style = {
        'font-style': '',
    };

    let className = '';
    let btn = 'btn';

    if (state === true) {
        style = {
            'font-style': 'italic',
        }

        className='darkBtn';
    }

    return (
    <div>
        <span style={style}>Italic text is here </span>
        <button onClick={changeState} className={`${className} ${btn}`} data-tip="Сursive">I</button>
        <ReactTooltip place="top" type="dark" effect="float"/>
    </div>
    
    )
}

export default ItalicText;
