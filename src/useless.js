import React from 'react';
import ReactDOM from 'react-dom';

class UselessButton extends React.Component{
    changeBackground(){

    }
    showMessage(){

    }
    
    render(){
        return (<button>I do nothing</button>);
    }
}

ReactDOM.render(<UselessButton type="colorChange"/>, document.getElementById('app'));