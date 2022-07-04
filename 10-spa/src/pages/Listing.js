import React from 'react';

export default function Listing(props) {
    return (
        <React.Fragment>
            <h1>recipes</h1>
            {
                props.data.map(r => (
                    <React.Fragment key={r._id}>
                        <div className='card'>
                            <h3 className='card-title'>
                                {r.title}
                            </h3>
                            <h4>ingredients</h4>
                            <ul>
                                {r.ingredients.map (i => 
                                    <li key={i._id}>{i}</li>)}
                            </ul>
                        </div>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}