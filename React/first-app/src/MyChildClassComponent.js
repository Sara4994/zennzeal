import React from 'react';

class MyChildClassComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <p>{this.props.title}</p>
                <p>the value is {this.props.value}</p>
            </>
        )
    }
}

export default MyChildClassComponent;