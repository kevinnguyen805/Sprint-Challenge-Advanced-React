import React from 'react';
import axios from 'axios'
import Search from './components/Search'
import './App.css';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      soccerData: [],
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data)
        this.setState({
          soccerData: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render(){return (
      <div>
        <h1></h1>
        <Search soccerData={this.state.soccerData}/>
      </div>
  );
  }
}

export default App;
