import React from 'react';
import './Skills.scss';


class Skills extends React.Component {



      
    render() {
        return(
            <div className="page_container skills_container pg-pan-left">
                <div style={{height:'5%'}}></div> 
                <div className="skills_title_container">
                    <h3 className="skills_title">Skills</h3>
                    <hr></hr>
                </div>
                <div className="skills_main_container">
                <div className="skills_section_container">
                    <div className="skills_article_container">
                        <div className="skills_article_rect">
                            <h5 className='skills_article_title'>BASIC</h5>
                        </div>
                        <p className='skills_article_desc'>HTML5와 CSS를 유연하게 설계할 수 있습니다.</p>
                        </div>
                        <div className="skills_article_container">
                        <div className="skills_article_rect">
                            <h5 className='skills_article_title'>WEB</h5>
                        </div>
                        <p className='skills_article_desc'>HTML5와 CSS를 유연하게 설계할 수 있습니다.</p>
                        </div>    
                        <div className="skills_article_container">
                        <div className="skills_article_rect">
                            <h5 className='skills_article_title'>Mobile</h5>
                        </div>
                        <p className='skills_article_desc'>HTML5와 CSS를 유연하게 설계할 수 있습니다.</p>
                        </div>                    <div className="skills_article_container">
                        <div className="skills_article_rect">
                            <h5 className='skills_article_title'>LANGUAGE</h5>
                        </div>
                        <p className='skills_article_desc'>HTML5와 CSS를 유연하게 설계할 수 있습니다.</p>
                        </div>                    <div className="skills_article_container">
                        <div className="skills_article_rect">
                            <h5 className='skills_article_title'>BACKEND</h5>
                        </div>
                        <p className='skills_article_desc'>AWS와 GCP를 사용한 경험이 있습니다. 분산 처리에 대해 이해하며, OS와 네트워크에 대한 기초지식이 있습니다.</p>
                        </div>                    <div className="skills_article_container">
                        <div className="skills_article_rect">
                            <h5 className='skills_article_title'>GRAPHIC</h5>
                        </div>
                        <p className='skills_article_desc'>Adobe Photoshop, Illustrator, XD, Premier의 기본기능을 사용할 수 있습니다.</p>
                        </div>
                                    
                </div>
                </div>
            </div>
        );
    }

}

export default Skills;