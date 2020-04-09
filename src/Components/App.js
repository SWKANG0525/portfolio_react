import React from 'react';
import '../css/App.css';
import Main from '../Components/main'
import Myinfo from '../Components/myinfo'
import Header from '../Components/header'
import Skills from '../Components/Skills'



class App extends React.Component {


  state = {

    isLoading : true,
  };

  
  
  componentDidMount() {
    


    }

  render() {


    if(this.state.isLoading === true) {
    return(
      <div>
        <div className="wrapper">
          <Header />
          <Main title="강_호동;" subtitle="Hello World! Welcome to My Portfolio"/>
          <Myinfo />
          <Skills skills_title="Skills"/>
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
