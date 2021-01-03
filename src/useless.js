import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
         <p>
          Welcome to my useless React app!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <UselessButton type="color"/>
        
        <UselessButton text="I do nothing useful!"/>
      </header>
    </div>
  );
}

export default App;

class UselessButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {class: "default"};
        this.showMessage = this.showMessage.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        const colors = ["green", "yellow", "red", "blue", "orange", "brown"];
        var i = Math.round(Math.random() * 10) % colors.length;
        var color = colors[i];
        this.setState({class: color});
        
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
                    <button class={this.state.class} onClick={this.changeColor}>The color is: {this.state.class}</button>
            );
        }
    }
}

UselessButton.defaultProps = {text: 'Look what I can do!!', type: 'message'};

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {time: new Date()};
    }

    render(){
        return (
            <h1>Current Time: {this.state.time.toLocaleTimeString()}</h1>
        );
    }

    componentDidMount(){
        const oneSec = 1000;
        this.intervalID = setInterval(() => {
        this.setState({time: new Date()});
        }, oneSec);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
}
