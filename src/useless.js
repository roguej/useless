import React from 'react';
import logo from './logo.svg';
import './App.css';

//TODO: demonstrate React app pattern of stateful parent component with stateless children. 
export class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {color: "blue"};
		this.changeColor = this.changeColor.bind(this);
	}
	
  changeColor(newColor){
	  this.setState({color: newColor});
  }
  render(){
    return (
        <div className="App">
        <header className="App-header">
            <Clock/>
            <p>
            Welcome to my useless React app!
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            <UselessButton onColorChange={this.changeColor} className={this.state.color} type="color"/>
            
            <UselessButton text="I do nothing useful!"/>
        </header>
        </div>
    )
  }
}

export default App;

class UselessButton extends React.Component{
    constructor(props){
        super(props);
        this.showMessage = this.showMessage.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleColorChange(event){
        const colors = ["green", "yellow", "red", "blue", "orange", "brown"];
        var i = Math.round(Math.random() * 10) % colors.length;
        var color = colors[i];
        this.props.onColorChange(color);
        
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
                    <button class={this.props.className} onClick={this.handleColorChange}>The color is: {this.props.className}</button>
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
