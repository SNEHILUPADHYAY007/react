import React from 'react';

const userInput=(props)=>{
    return(
        //<div>
            <input type="text" onChange={props.changed} value={props.name1}/>
        //</div>
    );
}

export default userInput;