import React from 'react';

function Posts({p}) {
    return (
        <div>
           {p.map((item) => {   
                return (
                <div key={item.id} className='post'>
                    <h1>{item.title}</h1>
                    <div>{item.body}</div>
                </div>
                )
            })}
        </div>
    )
}

export default Posts;
