import React from 'react';


function Cats() {
    const [ positionX, setPositionX ] = React.useState(0);
    const [ positionY, setPositionY ] = React.useState(0);
    const circle = 'circle';

    const changeirclePositionX = () => {
        setPositionX(Math.random() * 950);
        setPositionY(Math.random() * 950);
    }

    const style = {
        left: positionX + 'px',
        top: positionY + 'px',
    }

    return (
    <div className="field">
        <button onClick={changeirclePositionX} className={circle} style={style} ></button>
    </div>
    )
}

export default Cats;
