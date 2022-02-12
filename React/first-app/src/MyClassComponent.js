import React from 'react';
// import TitleComponent from './TitleComponent';
import MyChildClassComponent from './MyChildClassComponent';

class MyClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={ 
                display: false, 
                value: 10, 
                name: 'John', 
                users: [
                    { name: 'kevin', email: 'abc@gmail.com'}
                ],
                title: 'I am a child component'
            }
    }
    
    handleClick = () => {
            // fetch.get(' ---- ').then(res => this.setState({...this.state , users: res.data}))
        this.setState({display: true})
        // this.setState({...this.state, title: 'updated title'})
    }
    

    render() {
        console.log('rendered')
        return (
            <React.Fragment>
                {this.state.display && <p>My first class component</p>}
                <button onClick={this.handleClick}>show</button>
                <MyChildClassComponent title={this.state.title} value={this.state.value}/>
            </React.Fragment>            
        )
    }
}

export default MyClassComponent;