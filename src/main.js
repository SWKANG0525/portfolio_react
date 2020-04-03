import React from 'react';
import './Main.scss';
import { scroller } from 'react-scroll'



function Particle() { // Generate Particle Func
    
    return <div className="circle-container">
    <div className="circle"></div>
  </div>
}

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
        

    }

    scrollTo(clsname) {
        scroller.scrollTo(clsname, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })    
    }

    Mouseover = () => {


    }

    render() {
        
        
        const particles = [] 
        for(let i = 0 ; i<100; i++) {
            particles.push(i)
        }
// <div  styles={{ backgroundImage:`url(${car})` }}>
        return(
 
            <header>
                <div className = "main_div" >                    
                <div className = "title_container">
                    <div className = "focus-in-expand">
                        <h3 className= "main_subtitle">{this.props.subtitle}</h3>
                        <h1 className= "main_title">{this.props.title}</h1>
                    </div>
                    </div>

                    <div className="scroll_container">  
                    <div className = "shake-bottom">
                        <div className="scroll_btn_div" onClick={() => this.scrollTo('myinfo_container')} >
                        <div className="scroll_btn_text"></div>
                        </div>
                    </div>
                    </div>
                    </div>
               {particles.map(particle => (<Particle key={particle} /> )) }
               
            </header>
            
        );


    }


    
    

}
export default Main;