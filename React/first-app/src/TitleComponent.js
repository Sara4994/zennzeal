import React from 'react';

const TitleComponent = (props) => {
    console.log('child rendered')
    return (
        <>
            <p>{props.title}</p>
            <p>the value is {props.value}</p>
        </>
    )
}

export default TitleComponent;