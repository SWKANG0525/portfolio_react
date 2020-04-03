import React from 'react';
import './App.css';
import Main from './main';
import Myinfo from './myinfo'
import Header from './header'



class App extends React.Component {


  state = {

    isLoading : true

  };

  
  
  componentDidMount() {
    


    }

  render() {


    if(this.state.isLoading === true) {
    return(
      <div>
      <div className="wrapper">
      <Header />
      <Main title="강_호동;" subtitle="Hello World ! Welcome to My Portfolio"/>
      <Myinfo />
      </div>
      </div>
    );
    }
    else {
      return(
        <h1>Loading</h1>
      )
    }
  } 

}

export default App;
