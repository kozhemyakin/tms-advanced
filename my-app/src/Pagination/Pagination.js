import React from 'react';

function Pagination({setpage}) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            {arr.map((number) => {
                return <button key={number} onClick={() => setpage(number)}>{number}</button>
            })}
            
        </div>
    )
}

export default Pagination;
