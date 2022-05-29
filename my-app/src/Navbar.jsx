import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Figure from './Figure';

const types = [1, 2];
const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange'];

function Navbar() {
    const [ selectedType, setSelectedType] = useState(1);
    const [ selectedColor, setSelectedColor] = useState('red');

    return (
    <>
        <header className='headerFigure'>
            <div className='figure-links'>
                {types.map((number) => {
                        return (<Link to={`/figure/${number}/${selectedColor}`} key={number} onClick={() => setSelectedType(number)}>{number}</Link>)
                    })}
            </div>
            <div className='figure-links'>
                {colors.map((color) => {
                    return <Link to={`/figure/${selectedType}/${color}`} key={color} onClick={() => setSelectedColor(color)}>{color}</Link>
                })}
            </div>
        </header>

        <Routes>
            <Route path="figure/:number/:color" element={<Figure />} />
        </Routes>
        
    </>
    )
}

export default Navbar;
