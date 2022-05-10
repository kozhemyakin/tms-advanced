import React from 'react';
const circle = 'circle';

function Cats() {
    const [ positionX, setPositionX ] = React.useState(0);
    const [ positionY, setPositionY ] = React.useState(0);

    const changeirclePositionX = () => {
        setPositionX(Math.random() * 900);
        setPositionY(Math.random() * 900);
    }

    const style = {
        left: positionX + 'px',
        top: positionY + 'px',
        backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16),
    }

    return (
    <div className="field">
        <button onClick={changeirclePositionX} className={circle} style={style} ></button>
    </div>
    )
}

export default Cats;
