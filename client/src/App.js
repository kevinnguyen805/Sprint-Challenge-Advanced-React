import React from 'react';
import axios from 'axios'
import './App.css';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      soccerData: []
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
    <div className="App">
      Hello
      {
        this.state.soccerData.map(item => {
          return(
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.country}</p>
            </div>
          )
        })
      }
    </div>
  );
  }
}

export default App;
