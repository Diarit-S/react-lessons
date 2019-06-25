import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Composant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compteur: 0,
    }
  }

  increment = ()=>{
    this.setState({
      compteur : this.state.compteur + 1
    })
  }

  render(){
    return (
      <div>
        <span>{this.state.compteur}</span>
        <br/>
        <button onClick={ this.increment }>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Composant name="World"/>, document.getElementById('root'));
