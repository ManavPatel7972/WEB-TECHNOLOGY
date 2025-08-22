import React from 'react'

function Display(prop){
    if(prop.isDisplay){
        return(
            <h3>Visible True</h3>
        )
    }
    else{
        return(
            <h3>Visible False</h3>
        )
    }
}

const IfElese = (p) => {
    return(
        <>
        <h1>Fun If else Rendering</h1>
        <Display isDisplay={p.isDisplay}/>
        <hr />
        </>
    )
}

export default IfElese