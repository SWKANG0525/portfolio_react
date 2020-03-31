import React from 'react';
import './Main.scss';



function Particle() { // Generate Particle Func
    
    return <div className="circle-container">
    <div className="circle"></div>
  </div>
}

class Main extends React.Component {

    render() {
        const particles = [] 
        for(let i = 0 ; i<100; i++) {
            particles.push(i)
        }

        return(
            <section>
                <div className = "main_div">
                <div className = "title_container">
                    <div className = "focus-in-expand">
                        <h3 className= "main_subtitle">{this.props.subtitle}</h3>
                        <h1 className= "main_title">{this.props.title}</h1>
                    </div>
                    </div>

                    <div className="scroll_container">
                    <div className = "shake-bottom">
                        <div className="scroll_btn_div">
                        <div className="scroll_btn_text"></div>
                        </div>
                    </div>
                    </div>
                    </div>
               {particles.map(particle => (<Particle key={particle} /> )) }
               
            </section>
            
        );


    }


    
    

}
export default Main;