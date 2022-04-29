import React from 'react';

function Task({ number, text, done}) {

    const styles = done ? {textDecoration: 'line-through'} : {textDecoration: 'none'};

    return (
    <div className='taskCheckboxes'>
        <input type="checkbox" checked={done}></input>
        <span style={styles}>{number}.&nbsp;</span>
        <p style={styles}>{text}</p>
    </div>
    )
}

export default Task;
