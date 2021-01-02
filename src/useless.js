import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p>
          Welcome to my useless React app!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <UselessButton type="color"/>
        
        <UselessButton text="I do!"/>
      </header>
    </div>
  );
}

export default App;

const green = '#39D1B4';
const yellow = '#FFD712';

class UselessButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: "not green yet!"};
        this.showMessage = this.showMessage.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        const color = this.state.color === green ? yellow : green;
        this.setState({color: color});
    }
    showMessage(){
        alert('Told ya!');
    }
    
    render(){
        if(this.props.type === 'message'){
            return (<button onClick={this.showMessage}>{this.props.text}</button>);
        }
        else
        {
            return (
                <div style={{color: this.state.color}}>
                    <button class="colorButton" onClick={this.changeColor}>{this.props.text}</button>
                </div>
            
            );
        }
    }
}

UselessButton.defaultProps = {text: 'I do not work yet!', type: 'message'};
