import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: " "
        }
    }

    // changeText = () => {
    //     this.setState({ text: "Привет" })
    // }

    // resetText = () => {
    //     this.setState({ text: "Hello" })
    // }

    changeText = () => {
        this.setState(state => ({ text: !state.text }))
    }

    render(){
        return(
            <div>
                <button onClick={this.changeText}>Заменить</button>                
                {/* <button onClick={this.resetText}>Сбросить</button> */}
                <p>{this.state.text ? "Привет" : "Hello"}</p>
            </div>
        )
    }
}

export default Hello;