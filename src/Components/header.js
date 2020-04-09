import React from 'react';
import '../css/header.scss'
import { scroller } from 'react-scroll'

class Header extends React.Component {

    scrollTo(clsname) {
        scroller.scrollTo(clsname, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })    
    }


render() {
    return (

            <nav>
                <div className="navi_container">
                        <ul className="navi_bar">
                            <li className="navi_li" onClick={() => this.scrollTo('main_div')}>Home </li>
                            <li className="navi_li" onClick={() => this.scrollTo('myinfo_container')}>Info</li>
                            <li className="navi_li" onClick={() => this.scrollTo('skills_container')}>Skills</li>
                            <li className="navi_li" onClick={() => this.scrollTo('')}>Timeline</li>
                            <li className="navi_li" onClick={() => this.scrollTo('')}>Project</li>



                        </ul>
                </div>
            </nav>

    );

   
}

}

export default Header;